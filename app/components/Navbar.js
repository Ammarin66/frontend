'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <span className="navbar-toggler-icon"></span>
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
              <a
                className="nav-link"
                href="/service"
                role="button"
                aria-expanded="false"
                style={{ color: '#ffffffff' }}
              >
                บริการของเรา
              </a>
            </li>
            <li className="nav-item mx-2">
              <Link href="/contact" className="nav-link" style={{ color: '#ffffffff' }}>
                ติดต่อเรา
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link
              href="/register"
              className="btn"
              style={{
                borderRadius: '2rem',
                background: '#e3bb1c',
                color: '#000000ff',
                fontSize: '0.9rem',
                padding: '0.375rem 1.25rem',
                boxShadow: '0 2px 5px rgba(181, 234, 215, 0.3)',
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
                boxShadow: '0 2px 5px rgba(157, 124, 216, 0.3)',
              }}
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
