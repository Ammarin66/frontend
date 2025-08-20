"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  // ข้อมูลส่วนตัว
  const personalInfo = {
    name: "CarExpertHub",
    bio: "CarExpertHub ก่อตั้งขึ้นจากความหลงใหลและประสบการณ์ในวงการรถยนต์ของทีมผู้เชี่ยวชาญที่ต้องการสร้าง",
    quote: "ศูนย์กลางความรู้ด้านรถยนต์อันดับหนึ่ง ให้กับผู้ใช้ไทยทุกคน เรามุ่งเน้นให้ข้อมูลรีวิว วิเคราะห์ และคำแนะนำอย่างมืออาชีพ เพื่อช่วยให้คุณตัดสินใจเกี่ยวกับรถยนต์ได้อย่างมั่นใจ",
    skills: [
      "Tour Planning",
      "Local Culture Expert",
      "Photography",
      "Travel Writing",
      "Sustainable Tourism",
    ],
    education: [
      {
        degree: "ระดับประกาศนียบัตรวิชาชีพชั้นสูง",
        school: "วิทยาลัยเทคนิคเชียงใหม่",
        year: "2568-Present",
      },
      {
        degree: "ระดับประกาศนียบัตรวิชาชีพ",
        school: "วิทยาลัยเทคโนโลยีพายัพและบริหารธุรกิจ",
        year: "2565-2567",
      },
    ],
    experience: [
      {
        position: "Community Choice Award 2023",
        year: "2023-ปัจจุบัน",
      },
      {
        position: "Top Innovation in Automotive Technology 2023",
        year: "2023-ปัจจุบัน",
      },
      {
        position: "Best Automotive Review Platform 2022",
        year: "2022-2023",
      },
    ],
    socialMedia: [
      {
        platform: "Instagram",
        handle: "@fah_travels",
        icon: "bi-instagram",
        href: "https://www.instagram.com/fasai_sudakaew",
      },
      {
        platform: "YouTube",
        handle: "Fah's Journey",
        icon: "bi-youtube ",
        href: "https://www.youtube.com/@fasai-uj7qc",
      },
      {
        platform: "Facebook",
        handle: "ท่องเที่ยวกับฟ้าใส",
        icon: "bi-facebook",
        href: "https://www.facebook.com/sudakaew.fasai/",
      },
    ],
  };

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <div
            className="position-relative"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
          >
            <Image
              src="/images/asas.png"
              alt={personalInfo.name}
              width={300}
              height={300}
              className="rounded-circle shadow"
              style={{ objectFit: "cover", border: "5px solid white" }}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="p-4 rounded-4 shadow-sm">
            <h1 className="display-5 fw-bold mb-2" style={{ color: "#e3bb1c" }}>
              {personalInfo.name}
            </h1>
            <p className="lead mb-4">{personalInfo.bio}</p>
            <div className="d-flex gap-3 mb-3">
              {personalInfo.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-decoration-none"
                  target="_blank"
                >
                </a>
              ))}
            </div>
            <div className="p-3 rounded-3 mb-3" style={{ background: "white" }}>
              <p className="fst-italic mb-0">"{personalInfo.quote}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "story" ? "active" : ""}`}
                onClick={() => setActiveTab("story")}
                style={{
                  background: activeTab === "story" ? "#e3bb1c" : "transparent",
                  color: activeTab === "story" ? "black" : "#000000ff",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-book me-2"></i>
                ประวัติความเป็นมา
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "experience" ? "active" : ""
                }`}
                onClick={() => setActiveTab("experience")}
                style={{
                  background:
                    activeTab === "experience" ? "#e3bb1c" : "transparent",
                  color: activeTab === "experience" ? "black" : "#000000ff",
                  borderRadius: "30px",
                  padding: "10px 20px",
                  margin: "0 5px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-briefcase me-2"></i>
                รางวัลคำชมเชย
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="row">
        <div className="col-12">
          <div
            className="p-4 rounded-4 shadow-sm"
            style={{
              background:
                activeTab === "story"
                  ? "linear-gradient(to bottom, #000000d4, #b29318ff)"
                  : activeTab === "skills"
                  ? "linear-gradient(to bottom, #000000d4, #b29318ff)"
                  : "linear-gradient(to bottom, #000000d4, #b29318ff)",
              minHeight: "300px",
            }}
          >
            {/* My Story Tab */}
            {activeTab === "story" && (
              <div className="story-content">
                <h3 className="mb-4" style={{ color: "#e3bb1c" }}>
                  <i className="bi bi-book me-2"></i>
                  ประวัติ CarExpertHub
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <p className="card-text">
CarExpertHub ก่อตั้งขึ้นในปี 2020 โดยกลุ่มผู้หลงใหลในโลกยานยนต์ที่ต้องการสร้างแหล่งข้อมูลครบวงจรสำหรับคนรักรถในประเทศไทย จุดเริ่มต้นเกิดจากความคิดที่ว่า “คนไทยทุกคนควรมีแหล่งข้อมูลที่เชื่อถือได้ ก่อนตัดสินใจซื้อหรือดูแลรถยนต์ของตัวเอง” 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title mb-3">แรงบันดาลใจ</h5>
                        <p className="card-text">
CarExpertHub ก่อตั้งขึ้นเพื่อแก้ปัญหาข้อมูลรถยนต์ที่กระจัดกระจายและไม่ครบถ้วน ทีมงานต้องการสร้างแหล่งข้อมูล รีวิวและคำแนะนำที่เชื่อถือได้ พร้อมคอมมูนิตี้คนรักรถให้แลกเปลี่ยนความรู้และประสบการณ์ร่วมกัน
“ข้อมูลที่ถูกต้องคือพลังของการตัดสินใจ”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title mb-3 ">เป้าหมายในอนาคต</h5>
                        <p className="card-text">
CarExpertHub ตั้งเป้าที่จะเป็น ศูนย์กลางข้อมูลยานยนต์ครบวงจร ทั้งในประเทศไทยและระดับอาเซียน พร้อมขยายบริการสู่ แพลตฟอร์มออนไลน์เต็มรูปแบบ ที่รวมรีวิวรถมือหนึ่ง-มือสอง ระบบเปรียบเทียบประกัน การวิเคราะห์เชิงลึก และสร้างคอมมูนิตี้ให้คนรักรถได้แลกเปลี่ยนความรู้กันอย่างต่อเนื่อง
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="experience-content">
                <h3 className="mb-4" style={{ color: "#e3bb1c" }}>
                  <i className="bi bi-briefcase me-2"></i>
                  รางวัลคำชมเชย
                </h3>
                <div className="timeline position-relative">
                  {personalInfo.experience.map((exp, index) => (
                    <div key={index} className="card border-0 shadow-sm mb-4">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="card-title mb-0">{exp.position}</h5>
                          <span
                            className="badge rounded-pill"
                            style={{
                              background: "#e3bb1c",
                              padding: "8px 12px",
                            }}
                          >
                            {exp.year}
                          </span>
                        </div>
                        <h6 className="card-subtitle mb-3 text-muted">
                          {exp.company}
                        </h6>
                        <p className="card-text">
                          {index === 0
                            ? "CarExpertHub ได้รับการยกย่องจากชุมชนผู้รักรถในฐานะแพลตฟอร์มที่ส่งเสริมการแลกเปลี่ยนความรู้และประสบการณ์อย่างมืออาชีพ"
                          : (index === 1
                            ? "การนำเทคโนโลยีปัญญาประดิษฐ์ (AI) มาใช้วิเคราะห์และให้คำแนะนำเกี่ยวกับรถยนต์ ทำให้ CarExpertHub เป็นแพลตฟอร์มที่ทันสมัยและเชื่อถือได้"
                            : "CarExpertHub ได้รับการยกย่องในฐานะแพลตฟอร์มรีวิวรถยนต์ที่ครบถ้วนและเชื่อถือได้สำหรับผู้บริโภคในประเทศไทย")}
                         </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    

  );
}
