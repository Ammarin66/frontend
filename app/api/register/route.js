// /api/users/route.js - ปรับปรุงจากโค้ดเดิม
export async function POST(req) {
  try {
    const body = await req.json();
    
    console.log("Received user data:", body);
    
    // ตรวจสอบว่าเป็นการ update หรือ create
    if (body.action === "update" || body.isUpdate || body.updateUserId || body._method === "PUT") {
      // เป็นการอัปเดต
      const userId = body.id || body.updateUserId;
      console.log("Update operation for user ID:", userId);
      
      if (!userId) {
        return new Response(JSON.stringify({ message: "User ID is required for update" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
      
      // ลบ fields ที่ไม่จำเป็นออก
      const { action, isUpdate, updateUserId, _method, ...updateData } = body;
      
      // ส่งไปยัง backend สำหรับ update
      const response = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });
      
      if (!response.ok) {
        // ถ้า PUT ไม่ได้ ลอง PATCH
        const patchResponse = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${userId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });
        
        if (patchResponse.ok) {
          const data = await patchResponse.json();
          return new Response(JSON.stringify({ 
            ...data, 
            message: "User updated successfully via PATCH" 
          }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }
        
        // ถ้าไม่ได้เหมือนกัน return error
        const errorData = await response.json().catch(() => ({ message: "Update failed" }));
        return new Response(JSON.stringify(errorData), {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        });
      }
      
      const data = await response.json();
      return new Response(JSON.stringify({ 
        ...data, 
        message: "User updated successfully" 
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
      
    } else {
      // เป็นการสร้างใหม่ (โค้ดเดิม)
      console.log("Create operation");
      
      const response = await fetch("https://backend-nextjs-virid.vercel.app/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      
      const data = await response.json();
      
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }
    
  } catch (error) {
    console.error("Error in /api/users POST:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}