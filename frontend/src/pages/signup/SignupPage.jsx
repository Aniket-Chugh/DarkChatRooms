import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);

  };

  return (
    <main className="min-h-screen flex font-sans text-[#161616] bg-white selection:bg-[#0f62fe] selection:text-white">

      {/* LEFT PANEL - Value Proposition (Carbon Dark Theme) */}
      <section className="hidden lg:flex lg:w-1/2 bg-[#161616] text-white p-16 flex-col justify-between border-r border-[#393939]">
        <div>
          <h1 className="text-4xl font-light tracking-tight mb-8">
            Sim<span className="font-semibold">Chat</span>
          </h1>

          <h2 className="text-2xl font-light leading-snug max-w-lg mb-12">
            A secure, intelligent collaboration platform designed to streamline your team's workflow.
          </h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#0f62fe]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#f4f4f4]">Instant Communication</h3>
                <p className="text-sm text-[#a8a8a8] mt-1 leading-relaxed max-w-md">
                  Experience seamless, real-time messaging. Built on a highly stable infrastructure to ensure your team stays connected without interruptions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#0f62fe]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#f4f4f4]">AI-Powered Productivity</h3>
                <p className="text-sm text-[#a8a8a8] mt-1 leading-relaxed max-w-md">
                  Catch up quickly with automated thread summaries. Our AI assistant can also suggest professional replies to save you time.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#0f62fe]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#f4f4f4]">Intelligent Search</h3>
                <p className="text-sm text-[#a8a8a8] mt-1 leading-relaxed max-w-md">
                  Find documents and conversations based on meaning, not just exact keywords. Just describe what you are looking for.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#0f62fe]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#f4f4f4]">Automated Task Management</h3>
                <p className="text-sm text-[#a8a8a8] mt-1 leading-relaxed max-w-md">
                  The system automatically detects action items discussed in chats and converts them into trackable tasks with deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-[#8d8d8d]">
          &copy; {new Date().getFullYear()} SimChat Systems. End-to-end encrypted.
        </div>
      </section>

      {/* RIGHT PANEL - Registration Form (Carbon Light Theme) */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-white overflow-y-auto">
        <div className="w-full max-w-md">

          <div className="mb-10">
            <h2 className="text-3xl font-normal mb-2 tracking-tight text-[#161616]">Create an account</h2>
            <p className="text-[#525252] text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-[#0f62fe] hover:underline focus:outline-none focus:ring-1 focus:ring-[#0f62fe]">
                Log in
              </a>
            </p>
          </div>


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

            {/* Display Name */}
            <div>
              <label className="block text-sm mb-2 text-[#161616]">
                Display name
              </label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                required
                className="w-full bg-[#f4f4f4] border-b border-[#8d8d8d] text-[#161616] px-4 py-3 outline-none focus:border-[#0f62fe] focus:border-b-2 transition-all rounded-none placeholder-[#a8a8a8]"
                placeholder="e.g., John Doe"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm mb-2 text-[#161616]">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-[#f4f4f4] border-b border-[#8d8d8d] text-[#161616] px-4 py-3 outline-none focus:border-[#0f62fe] focus:border-b-2 transition-all rounded-none placeholder-[#a8a8a8]"
                placeholder="john_doe"
              />
            </div>

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
              <label className="block text-sm mb-2 text-[#161616]">
                Password
              </label>
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0f62fe] hover:bg-[#0353e9] text-white py-4 px-4 text-left flex justify-between items-center transition-colors group mt-8 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f62fe]"
            >
              <span className="text-sm font-medium">Continue</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>

            <p className="text-xs text-[#525252] mt-4 leading-relaxed">
              By continuing, you acknowledge that you have read and agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
