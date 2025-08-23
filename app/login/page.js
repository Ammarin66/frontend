"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = true;
    if (!formData.password.trim()) newErrors.password = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: formData.username, 
          password: formData.password 
        }),
      });

      const data = await res.json();
      console.log('Login response:', data);

      if (data.token) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        
        // Show success message
        await Swal.fire({
          icon: 'success',
          title: '<h3 style="color: #e3bb1c;">เข้าสู่ระบบสำเร็จ!</h3>',
          text: 'กำลังนำคุณเข้าสู่หน้าแอดมิน...',
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: 'rounded-4'
          }
        });

        // Reset form
        setFormData({
          username: "",
          password: "",
          rememberMe: false,
        });
        setSubmitted(false);
        setErrors({});

        // Redirect to admin page
        window.location.href = "/admin/users";
        
      } else {
        // Show error message
        await Swal.fire({
          icon: 'error',
          title: '<h3 style="color: #dc3545;">เข้าสู่ระบบไม่สำเร็จ!</h3>',
          text: data.message || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
          showConfirmButton: true,
          confirmButtonColor: '#e3bb1c',
          customClass: {
            popup: 'rounded-4'
          }
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      await Swal.fire({
        icon: 'error',
        title: '<h3 style="color: #dc3545;">เกิดข้อผิดพลาด!</h3>',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
        showConfirmButton: true,
        confirmButtonColor: '#e3bb1c',
        customClass: {
          popup: 'rounded-4'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "form-control";
    if (submitted && errors[fieldName]) {
      return `${baseClass} border-danger`;
    }
    return baseClass;
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 133, 162, 0.1) 0%, rgba(126, 196, 207, 0.1) 50%, rgba(184, 146, 255, 0.1) 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <div
                      className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, #e3bb1c, #f5d142)",
                      }}
                    >
                      <i
                        className="bi bi-person-fill text-white"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                  </div>
                  <h2 className="fw-bold mb-2" style={{ color: "#e3bb1c" }}>
                    เข้าสู่ระบบ
                  </h2>
                  <p className="text-muted">
                    ยินดีต้อนรับกลับ! กรอกข้อมูลเพื่อเข้าสู่ระบบ
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label
                      htmlFor="username"
                      className="form-label fw-semibold"
                    >
                      <i
                        className="bi bi-person me-2"
                        style={{ color: "#e3bb1c" }}
                      ></i>
                      ชื่อผู้ใช้ 
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={getInputClassName("username")}
                      placeholder="กรอกชื่อผู้ใช้"
                      disabled={isLoading}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border:
                          submitted && errors.username
                            ? "1px solid #dc3545"
                            : "1px solid #e0e0e0",
                      }}
                    />
                    {submitted && errors.username && (
                      <div className="text-danger small mt-1">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        กรุณากรอกชื่อผู้ใช้
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label fw-semibold"
                    >
                      <i
                        className="bi bi-lock me-2"
                        style={{ color: "#e3bb1c" }}
                      ></i>
                      รหัสผ่าน 
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={getInputClassName("password")}
                        placeholder="กรอกรหัสผ่าน"
                        disabled={isLoading}
                        style={{
                          padding: "12px 50px 12px 16px",
                          borderRadius: "10px",
                          border:
                            submitted && errors.password
                              ? "1px solid #dc3545"
                              : "1px solid #e0e0e0",
                        }}
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y me-2"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                        style={{
                          border: "none",
                          background: "transparent",
                          color: "#666",
                        }}
                      >
                        <i
                          className={`bi ${
                            showPassword ? "bi-eye-slash" : "bi-eye"
                          }`}
                        ></i>
                      </button>
                    </div>
                    {submitted && errors.password && (
                      <div className="text-danger small mt-1">
                        <i className="bi bi-exclamation-circle me-1"></i>
                        กรุณากรอกรหัสผ่าน
                      </div>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="form-check-input"
                        disabled={isLoading}
                        style={{ borderColor: "#e3bb1c" }}
                      />
                      <label
                        htmlFor="rememberMe"
                        className="form-check-label small"
                      >
                        จดจำการเข้าสู่ระบบ
                      </label>
                    </div>
                    <Link
                      href="#"
                      className="text-decoration-none small"
                      style={{ color: "#e3bb1c" }}
                    >
                      ลืมรหัสผ่าน?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-lg py-3"
                      style={{
                        background: isLoading 
                          ? "linear-gradient(135deg, #ccc, #999)" 
                          : "linear-gradient(135deg, #f5d142, #e3bb1c)",
                        border: "none",
                        borderRadius: "12px",
                        color: isLoading ? "#666" : "black",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        cursor: isLoading ? "not-allowed" : "pointer"
                      }}
                      onMouseOver={(e) => {
                        if (!isLoading) e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        if (!isLoading) {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          กำลังเข้าสู่ระบบ...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-box-arrow-in-right me-2"></i>
                          เข้าสู่ระบบ
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Divider */}
                <div className="position-relative mb-4">
                  <hr className="text-muted" />
                  <span
                    className="position-absolute top-50 start-50 translate-middle px-3 small text-muted"
                    style={{ backgroundColor: "white" }}
                  >
                    หรือ
                  </span>
                </div>

                {/* Social Login */}
                <div className="row g-2 mb-4">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn w-100 py-2"
                      disabled={isLoading}
                      style={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "10px",
                        background: "white",
                        color: "#333",
                      }}
                    >
                      <i
                        className="bi bi-google me-2"
                        style={{ color: "#db4437" }}
                      ></i>
                      Google
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn w-100 py-2"
                      disabled={isLoading}
                      style={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "10px",
                        background: "white",
                        color: "#333",
                      }}
                    >
                      <i
                        className="bi bi-facebook me-2"
                        style={{ color: "#4267B2" }}
                      ></i>
                      Facebook
                    </button>
                  </div>
                </div>

                {/* Register Link */}
                <div className="text-center">
                  <p className="text-muted mb-0">
                    ยังไม่มีบัญชี?
                    <Link
                      href="/register"
                      className="text-decoration-none fw-semibold ms-1"
                      style={{ color: "#e3bb1c" }}
                    >
                      สมัครสมาชิกเลย
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}