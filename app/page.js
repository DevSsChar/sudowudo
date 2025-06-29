import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[220px] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-[140px]">
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

          <button className="bg-[#4F9CF9] text-white text-base sm:text-lg font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg mt-8 lg:mt-[60px] hover:bg-blue-600 transition-colors w-full sm:w-auto">
            Try Whitepace free
          </button>
        </div>

        {/* Right Image Column */}
        <div className="w-full lg:w-1/2 xl:max-w-[824px] flex justify-center lg:justify-end">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:w-[824px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[549px] bg-[#C4DEFD] rounded-lg shadow-lg">
            {/* Image placeholder - you could replace this with an actual Image component */}
          </div>
        </div>
      </div>
    </section>
  );
}
