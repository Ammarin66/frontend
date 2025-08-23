'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('all');

  // ข้อมูลบริการท่องเที่ยว
  const tourServices = [
    {
      id: 1,
      title: "เช่ารถแบบเลือกเวลาได้",
      description: "รถ 2024 Toyota Alphard Arrives Generation 4",
      image: "/images/qqq.jpg",
      duration: "1 วัน",
      price: "2,000 บาท/ชั่วโมง",
      category: "cultural",
      highlights: [
        "แชสซีส์มั่นคง พร้อมลดแรงสั่นสะเทือน",
        "ระบบความปลอดภัยอัจฉริยะ Toyota Safety Sense & Teammate",
        "มีความรู้สึกระดับ First-Class รองรับทุกการใช้งาน"
      ]
    },
    {
      id: 2,
      title: "เช็คภายนอก",
      description: "เน้นเรื่อง สภาพตัวถัง, ไฟ, ยาง, ระบบความปลอดภัย ที่มองเห็นหรือสัมผัสได้จากด้านนอก",
      image: "/images/zzzz.jpg",
      price: "500 บาท",
      category: "adventure",
      highlights: [
        "เป็นเกณฑ์ตรวจสภาพก่อนเดินทางไกล",
        "ประหยัดค่าใช้จ่ายระยะยาว",
        "ป้องกันอุบัติเหตุและความเสียหาย"
      ]
    },
    {
      id: 3,
      title: "ล้างภายในภายนอกเคลือบสี",
      description: "ฉีดล้างคราบดิน ฝุ่น โคลน ยางมะตอย ดูดฝุ่น พรม เบาะและแผงประตูลงน้ำยาเคลือบเงาหรือเคลือบแก้ว/เซรามิก",
      image: "/images/asasa.jpg",
      price: "3,000 บาท",
      category: "beach",
      highlights: [
        "ป้องกันสีรถเสื่อมสภาพ",
        "มูลค่าขายต่อสูงขึ้น",
        "ยืดอายุการใช้งานวัสดุภายใน"
      ]
    },
    {
      id: 4,
      title: "ประกาศขาย",
      description: "รถ Benz CLS53 AMG ปี 2019 วิ่ง 2,600km",
      image: "/images/wwwww.jpg",
      price: "2,350,000 บาท",
      category: "cultural",
      highlights: [
        "สมรรถนะเครื่องยนต์แรง และเทคโนโลยีทันสมัย",
        "ห้องโดยสารสุดหรูและไฮเทค",
        "ดีไซน์สปอร์ตหรู"
      ]
    },
    {
      id: 5,
      title: "เช็คช่วงล่าง",
      description: "ตรวจสอบ ชิ้นส่วนที่อยู่ใต้ท้องรถและเกี่ยวข้องกับการรองรับน้ำหนัก การควบคุมรถ และการขับขี่",
      image: "/images/er.jpg",
      price: "700 บาท",
      category: "adventure",
      highlights: [
        "ยืดอายุการใช้งานของยาง",
        "ช่วยให้ควบคุมรถได้ดีขึ้น",
        "เพิ่มความปลอดภัย"
      ]
    },
    {
      id: 6,
      title: "สอบถามรถ",
      description: "รถ Porsche 911 Turbo S ปี 2019 ",
      image: "/images/qwe.jpg",
      category: "cultural",
      highlights: [
        "ราคาเท่าไหร่",
        "มีคนขายรถรุ่นนี้มั้ย",
        "การขับขี่เป็นยังไง"
      ]
    }
  ];

  // กรองบริการตามหมวดหมู่
  const filteredServices = activeCategory === 'all' 
    ? tourServices 
    : tourServices.filter(service => service.category === activeCategory);

  // หมวดหมู่ทั้งหมด
  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: 'bi-grid-fill', color: '#e3bb1c' },
    { id: 'cultural', name: 'สอบถามซื้อขายเช่ารถ', icon: 'bi-file-earmark-text', color: '#e3bb1c' },
    { id: 'adventure', name: 'เช็คภายนอกภายในช่วงล่าง', icon: 'bi bi-wrench', color: '#e3bb1c' },
    { id: 'beach', name: 'บริการล้างรถภาบในภายนอก', icon: 'bi bi-droplet', color: '#e3bb1c' }
  ];

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#e3bb1c' }}>บริการของเรา</h1>
        <p className="lead mb-4">ค้นพบประสบการณ์การบริการที่หลากหลายและน่าประทับใจกับเรา</p>
        
        {/* Categories */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`btn px-4 py-2 d-flex align-items-center gap-2 ${activeCategory === category.id ? 'text-red' : 'text-dark'}`}
              style={{ 
                background: activeCategory === category.id ? category.color : 'transparent',
                borderRadius: '30px',
                border: `1px solid ${category.color}`,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {filteredServices.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
              <div className="position-relative">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={500} 
                  height={300}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: 'white'
                }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill" style={{ 
                      background: service.category === 'cultural' ? '#e3bb1c' : 
                                service.category === 'adventure' ? '#e3bb1c' : '#e3bb1c',
                      padding: '8px 12px'
                    }}>
                      <i className={`bi ${
                        service.category === 'cultural' ? 'bi-bank2' : 
                        service.category === 'adventure' ? 'bi-tree-fill' : 'bi-water'
                      } me-1`}></i>
                      {service.category === 'cultural' ? 'สอบถามซื้อขายเช่ารถ' : 
                       service.category === 'adventure' ? 'เช็คภายนอกภายในช่วงล่าง' : 'บริการล้างรถภาบในภายนอก'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title mb-3" style={{ 
                  color: service.category === 'cultural' ? '#e3bb1c' : 
                         service.category === 'adventure' ? '#e3bb1c' : '#e3bb1c'
                }}>{service.title}</h5>
                <p className="card-text mb-3">{service.description}</p>
                <div className="mb-3">
                  <h6 className="mb-2">ไฮไลท์:</h6>
                  <ul className="list-unstyled">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="mb-1 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill me-2" style={{ 
                          color: service.category === 'cultural' ? '#e3bb1c' : 
                                service.category === 'adventure' ? '#e3bb1c' : '#e3bb1c'
                        }}></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-footer bg-white border-0 p-4 pt-0 d-flex justify-content-between align-items-center">
                <div className="fw-bold" style={{ 
                  color: service.category === 'cultural' ? '#e3bb1c' : 
                         service.category === 'adventure' ? '#e3bb1c' : '#e3bb1c',
                  fontSize: '1.1rem'
                }}>
                  {service.price}
                </div>
                <button className="btn px-4 py-2" style={{ 
                  background: service.category === 'cultural' ? '#e3bb1c' : 
                            service.category === 'adventure' ? '#e3bb1c' : '#e3bb1c',
                  color: 'white',
                  borderRadius: '30px'
                }}>
                  <i className="bi bi-info-circle me-2"></i>
                  รายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Testimonials Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h3 className="mb-3" style={{ color: '#e3bb1c' }}>รีวิวจากลูกค้า</h3>
          <p className="mb-4">ความประทับใจจากผู้ที่เคยใช้บริการของเรา</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/xyz.jpg" 
                  alt="ลูกค้า 1" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณสรวิศ</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"ตอนแรกแค่มาสอบถามเรื่องเช่ารถเฉย ๆ แต่พอได้คุยกับพนักงานแล้วรู้เลยว่าเขามืออาชีพจริง ให้ข้อมูลละเอียดมาก ไม่ยัดเยียดขายอะไรเลย ผมเลยตัดสินใจเช่ากับที่นี่ทันที แล้วก็ไม่ผิดหวังครับ รถสภาพดี ขับนิ่ม ใช้งานสบายใจมากครับ"</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/xz.jpg" 
                  alt="ลูกค้า 2" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณนงนภา</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"เรานำรถมาเช็คก่อนจะขาย เพราะอยากให้ลูกค้าที่มาซื้อมั่นใจว่ารถเราโอเค พนักงานเช็กให้ละเอียดมาก ทั้งช่วงล่าง ภายใน ภายนอก แถมมีรายงานให้ดูชัดเจนด้วย ดีมากเลยค่ะ ประทับใจตรงที่เขาไม่เร่งรีบ ทำงานดูใส่ใจจริงๆ"</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <Image 
                  src="/images/abc.jpg" 
                  alt="ลูกค้า 3" 
                  width={60} 
                  height={60}
                  className="rounded-circle"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h5 className="mb-1">คุณเป็นหนึ่ง</h5>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <p className="card-text fst-italic">"ผมใช้บริการล้างรถที่นี่บ่อย เพราะรู้สึกว่าทำละเอียดกว่าที่อื่น ล้างสะอาดทั้งภายนอกและภายในแบบไม่ต้องจ้ำจี้จ้ำไช บางครั้งเอาไปล้างที่อื่นก็ยังมีกลิ่นอับหรือฝุ่นค้าง แต่ที่นี่คือเนี้ยบจริง กลิ่นหอมสะอาดเหมือนรถใหม่เลยครับ"</p>
          </div>
        </div>
      </div>
    </div>
  );
}