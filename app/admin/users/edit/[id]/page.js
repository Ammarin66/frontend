'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // เพิ่ม SweetAlert2

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  // ฟังก์ชันลบผู้ใช้ พร้อม SweetAlert2
  const handleDelete = async (id, name) => {
    const result = await Swal.fire({
      title: 'ยืนยันการลบ?',
      text: `คุณแน่ใจว่าต้องการลบผู้ใช้ ${name} หรือไม่?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่ ลบเลย!',
      cancelButtonText: 'ยกเลิก'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`, {
          method: 'DELETE',
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          setItems(prev => prev.filter(item => item.id !== id));
          Swal.fire('ลบแล้ว!', 'ผู้ใช้ถูกลบเรียบร้อย', 'success');
        } else {
          const data = await res.json();
          Swal.fire('ผิดพลาด', data.message || res.statusText, 'error');
        }
      } catch (error) {
        Swal.fire('ผิดพลาด', 'เกิดข้อผิดพลาดในการลบ', 'error');
      }
    }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      ></div>

      <div
        className="card shadow-lg bg-body-tertiary w-100"
        style={{ maxWidth: '1600px', position: 'relative', zIndex: 2, borderRadius: '20px' }}
      >
        <div className="card-body py-5 px-4">
          <h2 className="fw-bold mb-4 text-center text-primary">📋 Users List</h2>

          <table className="table table-striped table-hover align-middle" style={{ width: '100%' }}>
            <thead className="table-dark">
              <tr>
                <th className="text-center">#</th>
                <th>Firstname</th>
                <th>Fullname</th>
                <th>Lastname</th>
                <th>Username</th>
                <th>Password</th>
                <th>Address</th>
                <th>Sex</th>
                <th>Birthday</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td className="text-center">{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.fullname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                  <td>{item.sex}</td>
                  <td>{item.birthday}</td>
                  <td className="text-center">
                    <Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning btn-sm">
                      Edit
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger btn-sm"
                      type="button"
                      onClick={() => handleDelete(item.id, item.firstname)}
                    >
                      <i className="fa fa-trash"></i> Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
