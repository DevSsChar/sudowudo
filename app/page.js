"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const observerRef = useRef(null);
  
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Target all animatable elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);
  
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[220px] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-[140px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Left Content Column */}
          <div className="flex flex-col items-start w-full lg:w-1/2 xl:max-w-[656px] text-center lg:text-left">
            <div className="w-full text-[#4F9CF9]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight leading-tight">
                Get More Done with whitepace
              </h1>
              <p className="text-base sm:text-lg font-normal leading-relaxed mt-4 lg:mt-6 text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Project management software that enables your teams to collaborate,
                plan, analyze and manage everyday tasks
              </p>
            </div>

            <button className="bg-[#4F9CF9] text-white text-base sm:text-lg font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg mt-8 lg:mt-[60px] hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
              Try Whitepace free
            </button>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2 xl:max-w-[824px] flex justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:w-[824px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[549px] bg-[#C4DEFD] rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
              {/* Hero image placeholder */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[220px] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-[140px]">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24 xl:space-y-[100px]">
          
          {/* Project Management Feature */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 animate-on-scroll">
            <div className="flex flex-col items-start w-full lg:w-1/2 text-center lg:text-left">
              <div className="w-full text-[#212529]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  Project Management
                </h2>
                <p className="text-base sm:text-lg font-normal leading-relaxed mt-4 lg:mt-6 text-gray-600">
                  Images, videos, PDFs and audio files are supported. Create 
                  math expressions and diagrams directly from the app. Take 
                  photos with the mobile app and save them to a note.
                </p>
              </div>
              
              <button className="bg-[#4F9CF9] text-white text-base sm:text-lg font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-md mt-8 lg:mt-[60px] hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                Get Started
              </button>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:w-[748px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[547px] bg-[#C4DEFD] rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
                {/* Project management image placeholder */}
              </div>
            </div>
          </div>
          
          {/* Your Work Everywhere Section */}
          <div className="bg-[#043873] w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[220px] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-[140px] animate-on-scroll">
            <div className="flex flex-col items-center justify-center max-w-7xl mx-auto text-center">
              <div className="relative w-full max-w-4xl">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/9ea2dc7a6da07beaebc97a3e3cb6f4c26b8c6cd5?placeholderIfAbsent=true" 
                  className="absolute -top-4 -right-4 w-32 md:w-48 lg:w-64 xl:w-[314px] opacity-30" 
                  alt="decorative element" 
                />
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight relative z-10">
                  Your work, everywhere you are
                </h2>
                <p className="text-white text-base sm:text-lg font-normal leading-relaxed mt-4 lg:mt-6 max-w-4xl mx-auto relative z-10">
                  Access your notes from your computer, phone or tablet by 
                  synchronising with various services, including whitepace, Dropbox 
                  and OneDrive. The app is available on Windows, macOS, Linux, 
                  Android and iOS. A terminal app is also available!
                </p>
              </div>
              <button className="bg-[#4F9CF9] text-white text-base sm:text-lg font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg mt-8 lg:mt-[60px] hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full sm:w-auto max-w-xs">
                Try Taskey
              </button>
            </div>
          </div>
          
          {/* Work Together Feature */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-24 animate-on-scroll">
            <div className="flex flex-col items-start w-full lg:w-1/2 text-center lg:text-left">
              <div className="relative w-full text-[#212529]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/03423032db10ca6fce85abdbef8c7b140c5cce51?placeholderIfAbsent=true"
                  className="absolute -top-4 right-0 w-32 md:w-48 lg:w-64 xl:w-[298px] opacity-20"
                  alt="decorative element"
                />
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight relative z-10">
                  Work together
                </h2>
                
                <p className="text-base sm:text-lg font-normal leading-relaxed mt-4 lg:mt-6 text-gray-600 relative z-10">
                  With whitepace, share your notes with your colleagues and
                  collaborate on them. You can also publish a note to the
                  internet and share the URL with others.
                </p>
              </div>
              
              <button className="bg-[#4F9CF9] text-white text-base sm:text-lg font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-md mt-8 lg:mt-[60px] hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                Try it now
              </button>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/5d87cf8d030e49dc8ac1f19983169590/123d83d985952f6f66be64aa3d927aa3e59cd3b0?placeholderIfAbsent=true"
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:w-[710px] rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
                alt="Work together illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
