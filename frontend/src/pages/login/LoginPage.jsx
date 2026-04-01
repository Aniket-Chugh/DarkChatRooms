import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Integrate with your authentication backend here
  };

  return (
    <main className="min-h-screen flex font-sans text-[#161616] bg-white selection:bg-[#0f62fe] selection:text-white">

      {/* LEFT PANEL - Branding & Welcome Back (Carbon Dark Theme) */}
      <section className="hidden lg:flex lg:w-1/2 bg-[#161616] text-white p-16 flex-col justify-between border-r border-[#393939]">
        <div>
          <h1 className="text-4xl font-light tracking-tight mb-8">
            Sim<span className="font-semibold">Chat</span>
          </h1>

          <h2 className="text-3xl font-light leading-snug max-w-lg mb-6">
            Welcome back.
          </h2>
          <p className="text-base text-[#a8a8a8] max-w-md leading-relaxed">
            Securely access your workspace, resume your tasks, and continue collaborating with your team in real-time.
          </p>
        </div>

        <div className="text-sm text-[#8d8d8d]">
          &copy; {new Date().getFullYear()} SimChat Systems. Authorized personnel only.
        </div>
      </section>

      {/* RIGHT PANEL - Login Form (Carbon Light Theme) */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-white">
        <div className="w-full max-w-md">

          <div className="mb-10">
            <h2 className="text-3xl font-normal mb-2 tracking-tight text-[#161616]">Log in</h2>
            <p className="text-[#525252] text-sm">
              Don't have an account?{' '}
              <a href="/register" className="text-[#0f62fe] hover:underline focus:outline-none focus:ring-1 focus:ring-[#0f62fe]">
                Create one now
              </a>
            </p>
          </div>

          {/* Third-Party Authentication */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#8d8d8d] hover:bg-[#e5e5e5] text-[#161616] py-3 px-4 rounded-none transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#8d8d8d] hover:bg-[#e5e5e5] text-[#161616] py-3 px-4 rounded-none transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm mb-2 text-[#161616]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#f4f4f4] border-b border-[#8d8d8d] text-[#161616] px-4 py-3 outline-none focus:border-[#0f62fe] focus:border-b-2 transition-all rounded-none placeholder-[#a8a8a8]"
                placeholder="name@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm text-[#161616]">
                  Password
                </label>
                <a href="/forgot-password" className="text-sm text-[#0f62fe] hover:underline focus:outline-none focus:ring-1 focus:ring-[#0f62fe]">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-[#f4f4f4] border-b border-[#8d8d8d] text-[#161616] px-4 py-3 outline-none focus:border-[#0f62fe] focus:border-b-2 transition-all rounded-none placeholder-[#a8a8a8]"
                placeholder="••••••••"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mt-4">
              <input
                id="rememberMe"
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-[#0f62fe] focus:ring-[#0f62fe] border-[#8d8d8d] rounded-none cursor-pointer"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#161616] cursor-pointer">
                Remember my ID on this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0f62fe] hover:bg-[#0353e9] text-white py-4 px-4 text-left flex justify-between items-center transition-colors group mt-8 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f62fe]"
            >
              <span className="text-sm font-medium">Log in</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>

          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
