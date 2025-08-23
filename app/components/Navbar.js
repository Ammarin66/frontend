'use client';

import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tokenState, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // อ่าน token จาก localStorage (ตอน mount)
    const token = localStorage.getItem("token");
    setToken(token);
    setIsLoading(false);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/login");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top" style={{ background: '#000000ff' }}>
      <div className="container py-2">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img src="/images/aaa.png" alt="Logo" width="30" height="30" className="me-2 rounded-circle" />
          <span style={{ color: '#e3bb1c', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>CarExpertHub</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          <span className="navbar-toggler-icon" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28227, 187, 28, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")` 
          }}>
          </span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-2">
              <Link href="/" className="nav-link position-relative" style={{ color: '#ffffffff', fontWeight: '500' }}>
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/about" className="nav-link" style={{ color: '#ffffffff' }}>
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <Link
                href="/service"
                className="nav-link"
                role="button"
                aria-expanded="false"
                style={{ color: '#ffffffff' }}
              >
                บริการของเรา
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/contact" className="nav-link" style={{ color: '#ffffffff' }}>
                ติดต่อเรา
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2 align-items-center">
            {!isLoading && (
              <>
                {tokenState ? (
                  // แสดงเมื่อมี token (ล็อกอินแล้ว)
                  <div className="d-flex gap-2 align-items-center">
                    <Link
                      href="/admin/users"
                      className="btn"
                      style={{
                        borderRadius: '2rem',
                        background: '#e3bb1c',
                        color: '#000000ff',
                        fontSize: '0.9rem',
                        padding: '0.375rem 1.25rem',
                        border: 'none',
                      }}
                    >
                      <i className="bi bi-gear me-1"></i>
                      แอดมิน
                    </Link>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="btn"
                      style={{
                        borderRadius: '2rem',
                        background: '#dc3545',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        padding: '0.375rem 1.25rem',
                        border: 'none',
                      }}
                    >
                      <i className="bi bi-box-arrow-right me-1"></i>
                      ออกจากระบบ
                    </button>
                  </div>
                ) : (
                  // แสดงเมื่อไม่มี token (ยังไม่ล็อกอิน)
                  <>
                    <Link
                      href="/register"
                      className="btn"
                      style={{
                        borderRadius: '2rem',
                        background: '#e3bb1c',
                        color: '#000000ff',
                        fontSize: '0.9rem',
                        padding: '0.375rem 1.25rem',
                        border: 'none',
                      }}
                    >
                      สมัครสมาชิก
                    </Link>

                    <Link
                      href="/login"
                      className="btn"
                      style={{
                        borderRadius: '2rem',
                        background: '#e3bb1c',
                        color: '#000000ff',
                        fontSize: '0.9rem',
                        padding: '0.375rem 1.25rem',
                        border: 'none',
                      }}
                    >
                      เข้าสู่ระบบ
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}