export default function Login() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/img/ggg.jpg")',
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
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // สีพื้นหลังขาวใส
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(10px)', // เบลอพื้นหลังด้านหลังฟอร์ม
          borderRadius: '12px',
        }}
      >
        <h2 className="mb-4 text-center fw-bold text-primary">เข้าสู่ระบบ</h2>

        <form>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="กรอกชื่อผู้ใช้ของคุณ"
              required
              autoComplete="username"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="inputPassword6" className="form-label fw-semibold">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="inputPassword6"
              className="form-control"
              aria-describedby="passwordHelpInline"
              placeholder="กรอกรหัสผ่าน"
              required
              autoComplete="current-password"
            />
            <div id="passwordHelpInline" className="form-text mt-1">
              รหัสผ่านต้องมีความยาว 8–20 ตัวอักษร
            </div>
          </div>

          {/* Checkbox */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="rememberMe">
              จดจำฉัน
            </label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100 fw-bold py-2 fs-5">
            เข้าสู่ระบบ
          </button>

          {/* Signup / Forgot password links */}
          <div className="mt-4 text-center">
            <a href="/register" className="me-3 text-decoration-none">
              สมัครสมาชิก
            </a>
            <a href="/forgot-password" className="text-decoration-none">
              ลืมรหัสผ่าน?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
