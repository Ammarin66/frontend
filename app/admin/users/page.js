"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Page() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- เพิ่ม state loading
  const router = useRouter();

  const getUsers = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }
      const data = await res.json();
      setItems(data);
      setLoading(false); // <-- โหลดเสร็จแล้ว
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
    // ถ้า loading ให้ return null หรือข้อความ loading
 if (loading) {
  return <div className='text-center'><h1>Loading...</h1></div>; // หรือ return null เพื่อไม่ให้ render อะไร
}
  };

  useEffect(() => {
    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

    const token = localStorage.getItem('token');
     if (!token) {
       router.push('/login');
       return;
     }

  const openEditModal = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditUser(null);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณต้องการลบผู้ใช้นี้ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "ใช่ ลบเลย!",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://backend-nextjs-virid.vercel.app/api/users/${id}`,
            { method: "DELETE" }
          );

          if (response.ok) {
            Swal.fire({
              icon: "success",
              title: "ลบสำเร็จ!",
              text: "ลบข้อมูลผู้ใช้เรียบร้อยแล้ว",
              confirmButtonColor: "#4e73df",
            });
            getUsers();
          } else {
            throw new Error("Failed to delete user");
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด",
            text: "ไม่สามารถลบข้อมูลผู้ใช้ได้",
            confirmButtonColor: "#dc3545",
          });
        }
      }
    });
  };

  const handleSave = async () => {
    if (!editUser) return;

    try {
      const res = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUser),
      });

      if (!res.ok) throw new Error("Failed to update user");

      Swal.fire({
        icon: "success",
        title: "บันทึกสำเร็จ",
        confirmButtonColor: "#4e73df",
      });

      closeModal();
      getUsers();
    } catch (error) {
      console.error("Error updating user:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถบันทึกข้อมูลผู้ใช้ได้",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">Users List</div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th>Firstname</th>
                  <th>Fullname</th>
                  <th>Lastname</th>
                  <th>Username</th>
                  <th>Address</th>
                  <th>Sex</th>
                  <th>Birthday</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="text-center">
                      กำลังโหลดข้อมูล...
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center">{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.fullname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.username}</td>
                      <td>{item.address}</td>
                      <td>{item.sex}</td>
                      <td>{item.birthday}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => openEditModal(item)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa fa-trash"></i> ลบ
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">แก้ไขผู้ใช้: {editUser?.fullname}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
                <div className="row">
                  <div className="col-6">
                    <div className="mb-2">
                      <label className="form-label">คำนำหน้า</label>
                      <select
                        className="form-select form-select-sm"
                        value={editUser.firstname}
                        onChange={(e) =>
                          setEditUser({ ...editUser, firstname: e.target.value })
                        }
                      >
                        <option value="นาย">นาย</option>
                        <option value="นาง">นาง</option>
                        <option value="นางสาว">นางสาว</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-2">
                      <label className="form-label">เพศ</label>
                      <select
                        className="form-select form-select-sm"
                        value={editUser.sex}
                        onChange={(e) =>
                          setEditUser({ ...editUser, sex: e.target.value })
                        }
                      >
                        <option value="ชาย">ชาย</option>
                        <option value="หญิง">หญิง</option>
                        <option value="อื่นๆ">อื่นๆ</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="mb-2">
                      <label className="form-label">ชื่อ</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={editUser.fullname}
                        onChange={(e) =>
                          setEditUser({ ...editUser, fullname: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-2">
                      <label className="form-label">นามสกุล</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={editUser.lastname}
                        onChange={(e) =>
                          setEditUser({ ...editUser, lastname: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editUser.username}
                    onChange={(e) =>
                      setEditUser({ ...editUser, username: e.target.value })
                    }
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">ที่อยู่</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={editUser.address}
                    onChange={(e) =>
                      setEditUser({ ...editUser, address: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">วันเกิด</label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    value={editUser.birthday}
                    onChange={(e) =>
                      setEditUser({ ...editUser, birthday: e.target.value })
                    }
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    onClick={closeModal}
                  >
                    ยกเลิก
                  </button>
                  <button type="submit" className="btn btn-success btn-sm">
                    บันทึก
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          border-radius: 8px;
          width: 450px;
          max-width: 90vw;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        
        .modal-header {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #dee2e6;
          display: flex;
          justify-content: between;
          align-items: center;
          background-color: #f8f9fa;
          border-radius: 8px 8px 0 0;
        }
        
        .modal-title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 500;
          color: #495057;
          flex-grow: 1;
        }
        
        .btn-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          font-weight: bold;
          color: #999;
          cursor: pointer;
          padding: 0;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
        }
        
        .btn-close:hover {
          background-color: #f5f5f5;
          color: #000;
        }
        
        .modal-body {
          padding: 1.25rem;
        }
        
        .modal-footer {
          padding: 1rem 1.25rem;
          border-top: 1px solid #dee2e6;
          background-color: #f8f9fa;
          border-radius: 0 0 8px 8px;
          display: flex;
          justify-content: flex-end;
        }
        
        .form-label {
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
          color: #495057;
        }
        
        .form-control-sm, .form-select-sm {
          font-size: 0.875rem;
          padding: 0.25rem 0.5rem;
        }
        
        .btn-sm {
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
        }
        
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        
        .mb-3 {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}