import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#161616] font-sans selection:bg-[#0f62fe] selection:text-white overflow-x-hidden">

      {/* NAVIGATION BAR */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4 border-b border-[#e5e5e5] bg-white sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-light tracking-tight">
            Sim<span className="font-semibold">Chat</span>
          </a>
          <div className="hidden md:flex gap-6 text-sm text-[#525252]">
            <a href="#why-us" className="hover:text-[#0f62fe] transition-colors">Why Sim?</a>
            <a href="#features" className="hover:text-[#0f62fe] transition-colors">Features</a>
            <a href="#privacy" className="hover:text-[#0f62fe] transition-colors">Total Privacy</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-sm font-medium text-[#161616] hover:text-[#0f62fe] transition-colors hidden sm:block">
            Log in
          </a>
          <a href="/register" className="bg-[#0f62fe] hover:bg-[#0353e9] text-white text-sm py-2.5 px-6 transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f62fe]">
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Hero Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-0 border-r border-[#e5e5e5]">
          <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
            Chat smarter. <br/>
            <span className="font-semibold">Keep it secret.</span>
          </h1>
          <p className="text-lg text-[#525252] max-w-lg mb-12 leading-relaxed">
            A super-smart chat app with a built-in AI helper and auto to-do lists. The best part? <strong>We can't read your messages, and we never sell your data.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/register" className="bg-[#0f62fe] hover:bg-[#0353e9] text-white py-4 px-8 flex justify-between items-center transition-colors group rounded-none min-w-[200px]">
              <span className="text-sm font-medium">Create Free Account</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Visual / Privacy Promise */}
        <div className="w-full lg:w-1/2 bg-[#f4f4f4] flex flex-col justify-center p-6 lg:p-16 relative">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#161616 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 space-y-6 max-w-md mx-auto lg:mx-0">
            <h3 className="text-2xl font-light mb-2">Why not WhatsApp or Facebook?</h3>
            <p className="text-[#525252] leading-relaxed">
              You know how you talk about buying shoes on a chat app, and 5 minutes later you see shoe ads on Instagram? Yeah, we don't do that.
            </p>
            <div className="bg-white border-l-4 border-[#0f62fe] p-6 shadow-sm">
              <p className="text-[#161616] font-medium mb-2">The Big Tech Business Model:</p>
              <p className="text-sm text-[#525252] line-through decoration-red-500 mb-1">1. Read your chats.</p>
              <p className="text-sm text-[#525252] line-through decoration-red-500 mb-1">2. Build a profile on you.</p>
              <p className="text-sm text-[#525252] line-through decoration-red-500">3. Sell ads based on your life.</p>

              <p className="text-[#161616] font-medium mt-6 mb-2">The SimChat Promise:</p>
              <p className="text-sm text-[#0f62fe] font-semibold">We lock your data. We don't show ads. Period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE "ZERO KNOWLEDGE" EXPLANATION */}
      <section id="privacy" className="bg-[#161616] text-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light mb-6">How our "Zero Knowledge" AI works.</h2>
          <p className="text-[#a8a8a8] text-lg leading-relaxed max-w-2xl mx-auto">
            Usually, if an app has an AI, the company is reading everything you type. We built ours differently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-[#393939] p-8 bg-[#262626]">
            <div className="text-[#0f62fe] font-bold text-2xl mb-4">01. Scrambled Data</div>
            <p className="text-[#f4f4f4] text-sm leading-relaxed">
              Before your message leaves your phone, it is "hashed" (turned into a messy code that looks like <span className="font-mono text-xs text-[#8d8d8d]">a8f9b2...</span>). We cannot read it.
            </p>
          </div>
          <div className="border border-[#393939] p-8 bg-[#262626]">
            <div className="text-[#0f62fe] font-bold text-2xl mb-4">02. Anonymous AI</div>
            <p className="text-[#f4f4f4] text-sm leading-relaxed">
              When our AI reads a chat to give you a summary, it doesn't know who is talking. It just sees anonymous codes talking to each other.
            </p>
          </div>
          <div className="border border-[#393939] p-8 bg-[#262626]">
            <div className="text-[#0f62fe] font-bold text-2xl mb-4">03. Nobody knows</div>
            <p className="text-[#f4f4f4] text-sm leading-relaxed">
              If our company servers were ever hacked, the hackers would find absolutely nothing. Just locked boxes without the keys. Your privacy is 100% safe.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-light mb-6">Cool features, zero spying.</h2>
          <p className="text-[#525252] text-lg leading-relaxed">
            Just because we are extremely private doesn't mean we are boring. SimChat is packed with tools to make your life easier, even when you're off the grid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e5e5e5]">

          {/* Feature: Lightning Fast */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Lightning Fast</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Send texts, images, and files instantly. Whether you are on Wi-Fi or bad mobile data, your messages go through without delay.
            </p>
          </div>

          {/* Feature: Your AI Helper */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Your AI Helper</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Missed a lot of messages while you were asleep? Tap a button and our private AI will give you a quick 3-point summary of what happened.
            </p>
          </div>

          {/* Feature: Magic Search */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Magic Search</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Can't remember the exact word someone used? Just type "that photo of the dog" and the system understands what you mean and finds it.
            </p>
          </div>

          {/* Feature: Auto To-Do Lists */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Auto To-Do Lists</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              If someone says in the group, "Please finish the project by Monday", our app automatically creates a task reminder for you so you don't forget.
            </p>
          </div>

          {/* Feature: Offline Maps */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Offline Maps</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Never lose your way. Download regions ahead of time and navigate using fully interactive maps even when you have zero cell service.
            </p>
          </div>

          {/* Feature: Pocket Wikipedia */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Pocket Wikipedia</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Carry human knowledge wherever you go. Search, read, and explore Wikipedia articles natively without needing an internet connection.
            </p>
          </div>

          {/* Feature: Bluetooth Video Calls */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Bluetooth Video Calls</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Enjoy crisp, secure, close-range video calls powered by a direct Bluetooth connection—zero mobile data required.
            </p>
          </div>

          {/* Feature: Pinned Conversations & Smart Folders */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Pinned & Smart Folders</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Keep your most important chats at the top and automatically organize work, family, and friend groups into customized neat folders.
            </p>
          </div>

          {/* Feature: Voice Notes & Voice-to-Text */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Voice Notes & Transcripts</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Send crystal-clear voice memos or read them on the go with our highly accurate, completely on-device voice-to-text transcription.
            </p>
          </div>

          {/* Feature: Temporary Ephemeral Messages */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Ephemeral Messages</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Set your messages to self-destruct after a certain time. Once they're gone, they are permanently erased from all devices.
            </p>
          </div>

          {/* Feature: One-time Photos */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="miter" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <h3 className="text-lg font-semibold mb-3">One-Time Photos</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Share sensitive photos securely. The image vanishes immediately after it is viewed once, leaving absolutely no trace behind.
            </p>
          </div>

          {/* Feature: Anonymous Mode / Hidden Chats */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
            <h3 className="text-lg font-semibold mb-3">Hidden Chats</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Lock specific conversations behind a PIN or biometric scan, keeping them completely invisible from your main chat list.
            </p>
          </div>

          {/* Feature: Multi-Language Translation */}
          <div className="p-8 border-b border-r border-[#e5e5e5] hover:bg-[#f4f4f4] transition-colors cursor-default group">
            <svg className="w-8 h-8 text-[#0f62fe] mb-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
            <h3 className="text-lg font-semibold mb-3">In-Chat Translation</h3>
            <p className="text-[#525252] text-sm leading-relaxed">
              Chat seamlessly with anyone in the world. Messages are translated locally on your device in real-time without pinging external servers.
            </p>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA / FOOTER */}
      <footer className="bg-[#161616] text-[#f4f4f4] pt-24 pb-12 px-6 lg:px-16">
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Take back control of your data today.
          </h2>
          <a href="/register" className="inline-flex bg-[#0f62fe] hover:bg-[#0353e9] text-white py-4 px-8 justify-between items-center transition-colors group rounded-none min-w-[200px]">
            <span className="text-sm font-medium">Join SimChat</span>
            <svg className="w-4 h-4 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>

        <div className="border-t border-[#393939] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-[#8d8d8d]">
          <div>
            <span className="font-semibold text-white mr-2">SimChat</span>
            A secure division of RankedWeb
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
