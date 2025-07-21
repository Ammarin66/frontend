'use client'; // ถ้าใช้ App Router

import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    title: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthday: '',
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('สมัครสมาชิกเรียบร้อย: ' + formData.username);
    console.log('ข้อมูลที่ส่ง:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage:
          'url("/img/hhh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="rounded"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // พื้นหลังสีขาวใส
          padding: '30px 40px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(8px)', // เบลอพื้นหลังด้านหลังฟอร์ม
          borderRadius: '12px',
          overflowY: 'auto',
          maxHeight: '90vh',
        }}
      >
        <h2 className="mb-4 text-center fw-bold text-primary">สมัครสมาชิก</h2>

        <form onSubmit={handleSubmit}>
          {/* ชื่อผู้ใช้ */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="ใส่ชื่อผู้ใช้ของคุณ"
              required
              autoComplete="username"
            />
          </div>

          {/* รหัสผ่าน */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              รหัสผ่าน
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="ใส่รหัสผ่าน"
              required
              autoComplete="new-password"
            />
          </div>

          {/* คำนำหน้าชื่อ */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-semibold">
              คำนำหน้าชื่อ
            </label>
            <select
              className="form-select"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          {/* ชื่อ */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label fw-semibold">
              ชื่อ
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="เช่น สมชาย"
              required
            />
          </div>

          {/* นามสกุล */}
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label fw-semibold">
              นามสกุล
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="เช่น ใจดี"
              required
            />
          </div>

          {/* ที่อยู่ */}
          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-semibold">
              ที่อยู่
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              placeholder="ระบุที่อยู่ของคุณ"
              required
            ></textarea>
          </div>

          {/* เพศ */}
          <fieldset className="mb-3">
            <legend className="col-form-label fw-semibold pt-0">เพศ</legend>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="ชาย"
                checked={formData.gender === 'ชาย'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="male">
                ชาย
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="หญิง"
                checked={formData.gender === 'หญิง'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="female">
                หญิง
              </label>
            </div>
          </fieldset>

          {/* วันเกิด */}
          <div className="mb-3">
            <label htmlFor="birthday" className="form-label fw-semibold">
              วันเกิด
            </label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              required
            />
          </div>

          {/* ยอมรับเงื่อนไข */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label className="form-check-label fw-semibold" htmlFor="agree">
              ฉันยอมรับเงื่อนไขการใช้งาน
            </label>
          </div>

          {/* ปุ่ม Register */}
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold py-2 fs-5"
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </div>
  );
}

