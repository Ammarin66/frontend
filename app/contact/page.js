'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [activeMethod, setActiveMethod] = useState('form');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // ในสถานการณ์จริงจะส่งข้อมูลไปยัง API
    alert('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  // ข้อมูลการติดต่อ
  const contactInfo = {
    email: "xamrinthrt7@gmail.com",
    phone: "099-XXX-XXXX",
    address: "9 ถนนเวียงแก้ว ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200",
    workingHours: "จันทร์-ศุกร์: 8:00 - 18:00 น.",
    socialMedia: [

    ],
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#e3bb1c' }}>ช่องทางการติดต่อ</h1>
        <p className="lead mb-4">มีคำถามหรือข้อสงสัย? ติดต่อเราได้ตลอดเวลา เรายินดีให้คำปรึกษาและช่วยเหลือคุณ</p>
        <div className="d-flex justify-content-center gap-3 mb-4">
          {contactInfo.socialMedia.map((social, index) => (
            <a key={index} href={social.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: social.color, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <i className={`bi ${social.icon} fs-4 text-white`}></i>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Methods Tabs */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeMethod === 'form' ? 'active' : ''}`} 
                onClick={() => setActiveMethod('form')}
                style={{ 
                  background: activeMethod === 'form' ? '#e3bb1c' : 'transparent',
                  color: activeMethod === 'form' ? 'black' : '#000000ff',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-envelope-fill me-2"></i>
                ส่งข้อความ
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeMethod === 'info' ? 'active' : ''}`} 
                onClick={() => setActiveMethod('info')}
                style={{ 
                  background: activeMethod === 'info' ? '#e3bb1c' : 'transparent',
                  color: activeMethod === 'info' ? 'black' : '#000000ff',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  margin: '0 5px',
                  border: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="bi bi-info-circle-fill me-2"></i>
                ข้อมูลติดต่อ
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div className="p-4 rounded-4 shadow-sm" style={{ 
            background: activeMethod === 'form' ? 'linear-gradient(to bottom, #000000d4, #b29318ff)' : 
                       activeMethod === 'info' ? 'linear-gradient(to bottom, #000000d4, #b29318ff)' : 
                       'rgba(184, 146, 255, 0.1)',
            minHeight: '400px'
          }}>
            {/* Contact Form */}
            {activeMethod === 'form' && (
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="p-4">
                    <h3 className="mb-4" style={{ color: '#e3bb1c' }}>
                      <i className="bi bi-chat-fill me-2" style={{ color: '#ffffffff' }}></i>
                      ส่งข้อความถึงเรา
                    </h3>
                    <p className="mb-4"style={{ color: '#ffffffff' }}>กรอกแบบฟอร์มด้านล่างเพื่อส่งข้อความถึงเรา เราจะติดต่อกลับโดยเร็วที่สุด</p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label"style={{ color: '#e3bb1c' }}>ชื่อ-นามสกุล</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="กรุณากรอกชื่อ-นามสกุล" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #e3bb1c' }}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label"style={{ color: '#e3bb1c' }}>อีเมล</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="กรุณากรอกอีเมล" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #e3bb1c' }}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label"style={{ color: '#e3bb1c' }}>หัวข้อ</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="กรุณากรอกหัวข้อ" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #e3bb1c' }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label"style={{ color: '#e3bb1c' }}>ข้อความ</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5" 
                          placeholder="กรุณากรอกข้อความ" 
                          required
                          style={{ borderRadius: '15px', padding: '12px 15px', border: '1px solid #ffe0e9' }}
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="btn px-4 py-2" 
                        style={{ 
                          background: '#e3bb1c', 
                          color: 'black', 
                          borderRadius: '30px',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        ส่งข้อความ
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <div className="position-relative" style={{ width: '300px', height: '300px', margin: '0 auto' }}>
                      <Image 
                        src="/images/aaa.png" 
                        alt="Contact Us" 
                        width={300} 
                        height={300}
                        className="rounded-circle shadow"
                        style={{ objectFit: 'cover', border: '5px solid white' }}
                      />
                    </div>
                    <p className="mt-4 fst-italic"style={{ color: '#ffffffff' }}>"เราขอขอบคุณทุกท่านที่ส่งข้อความถึงเรา"</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            {activeMethod === 'info' && (
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h3 className="mb-4" style={{ color: '#e3bb1c' }}>
                    <i className="bi bi-geo-alt-fill me-2"style={{ color: '#ff0000ff' }}></i>
                    ข้อมูลติดต่อ
                  </h3>
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#e3bb1c', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-envelope-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">อีเมล</h5>
                          <p className="card-text mb-0">{contactInfo.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#e3bb1c', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-telephone-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">เบอร์โทรศัพท์</h5>
                          <p className="card-text mb-0">{contactInfo.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#e3bb1c', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-geo-alt-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">ที่อยู่</h5>
                          <p className="card-text mb-0">{contactInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: '#e3bb1c', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          marginRight: '15px'
                        }}>
                          <i className="bi bi-clock-fill fs-4 text-white"></i>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">เวลาทำการ</h5>
                          <p className="card-text mb-0">{contactInfo.workingHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="mb-4" style={{ color: '#e3bb1c' }}>
                    <i className="bi bi-map-fill me-2"style={{ color: '#ff0000ff' }}></i>
                    แผนที่
                  </h3>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                      <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4790.251117770331!2d98.9839193!3d18.7928973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e1!3m2!1sth!2sth!4v1753104349691!5m2!1sth!2sth" 
                          width="600" 
                          height="450" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}