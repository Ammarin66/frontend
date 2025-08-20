'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const bootstrap = import('bootstrap/dist/js/bootstrap.bundle.min.js');

    bootstrap.then(() => {
      const carouselElement = document.getElementById('carouselExample');
      if (carouselElement) {
        carouselElement.addEventListener('slide.bs.carousel', (event) => {
          setActiveIndex(event.to);
        });
      }
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const captions = [
    {
      title: "สอบถามซื้อ-ขาย-เช่ารถ",
      description: "บริการสำหรับคนที่ต้องการขาย-ซื้อ-เช่ารถเพื่อให้เข้าถึงสำหรับคนทุกคน",
      color: '#FFD700',
    },
    {
      title: "เช็คภายนอก-ภายใน-ช่วงล่าง",
      description: "บริการที่จะเช็คทุกจุดภายในรถของท่านโดยผ่านจากช่างที่มีประสบการณ์",
      color: '#FFD700',
    },
    {
      title: "บริการล้างรถ-ภายใน-ภายนอก",
      description: "บริการทำความสะอาดทั้งภายในและภายนอกของท่านโดยอุปกรณ์ที่ดีและช่างมืออาชีพ",
      color: '#FFD700',
    },
  ];

  return (
    <div className="carousel-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '0px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', margin: '20px 0' }}>
      <div className="decorative-elements"></div>

      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators" style={{ bottom: isMobile ? '10px' : '20px' }}>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className={activeIndex === index ? "active" : ""}
              aria-current={activeIndex === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              style={{
                width: activeIndex === index ? (isMobile ? '20px' : '30px') : (isMobile ? '8px' : '12px'),
                height: isMobile ? '8px' : '12px',
                borderRadius: '20px',
                background: '#FFD700',
                opacity: activeIndex === index ? 1 : 0.5,
                transition: 'all 0.5s ease',
                margin: '0 5px',
                border: 'none'
              }}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {captions.map((caption, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <Image 
                src={`/images/${index === 0 ? 'b.jpg' : index === 1 ? 'cccc.jpg' : 'dd.jpg'}`} 
                className="d-block w-100" 
                alt={caption.title}
                width={1920} 
                height={690} 
                style={{ 
                  objectFit: 'cover', 
                  height: isMobile ? '400px' : '600px',
                  filter: 'brightness(0.9)'
                }} 
              />
              {/* โซนข้อความ */}
              <div className="carousel-caption custom-caption">
                <h2>{caption.title}</h2>
                {!isMobile && <p>{caption.description}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Prev & Next Buttons */}
        {/* ... (ปุ่ม prev/next ของคุณเหมือนเดิม ผมไม่เปลี่ยน) ... */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
          style={{
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            left: isMobile ? '10px' : '20px',
            opacity: 0.8,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ 
            filter: 'brightness(0.6) contrast(1.2)',
            width: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px'
          }} />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
          style={{
            width: isMobile ? '40px' : '50px',
            height: isMobile ? '40px' : '50px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            right: isMobile ? '10px' : '20px',
            opacity: 0.8,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ 
            filter: 'invert(1)',
            width: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px'
          }} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Global CSS */}
      <style jsx>{`
        .custom-caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          max-width: ${isMobile ? '90%' : '60%'};
          padding: ${isMobile ? '4px 8px' : '8px 12px'};
        }

        .custom-caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          max-width: ${isMobile ? '90%' : '60%'};
          padding: ${isMobile ? '4px 8px' : '8px 12px'};
        }

        .custom-caption p {
          color: gold;
          font-size: ${isMobile ? '0.9rem' : '1.2rem'};
          margin-bottom: 0;
          font-family: 'Poppins', sans-serif;
        }

      `}</style>
    </div>
  );
}
