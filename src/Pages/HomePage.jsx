const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <section className="pt-30 text-main-text mx-8 space-y-7 py-20">
        <h3 className="text-text font-mono capitalize text-sm w-70 leading-relaxed tracking-wider">
          RAYGO LABS / DIGITAL TECHNOLOGY STUDIO
        </h3>
        <h1 className="text-5xl text-left leading-15  font-semibold w-80  tracking-wide">
          Build digital experiences that move your business forward.
        </h1>
        <h2 className="text-main-text/70 text-left leading-10 text-xl w-83 sm:w-86 overflow-hidden">
          RAYGO Labs helps businesses build powerful websites, custom software,
          CRM solutions and cloud-powered digital systems designed to perform,
          scale and grow.
        </h2>
        <div className="flex flex-col gap-y-5 outline-none">
          <button className="text-black px-8 w-fit border text-md capitalize py-4 rounded-sm bg-main-text font-semibold">
            Start Your Project
          </button>
          <button class="relative cursor-pointer py-4 px-8 text-center font-inter inline-flex justify-center text-base uppercase text-main-text rounded-lg border-solid transition-transform duration-300 ease-in-out group w-fit outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
            <span class="relative z-20">Explore Services</span>

            <span class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
          </button>
        </div>
      </section>

      {/* Introduction section */}
      <section className="border-text/30 border-t  text-main-text mx-8 py-10 space-y-12 overflow-hidden">
        <h2 className="font-semibold text-3xl leading-11 w-80 ">
          Technology built around your business.
        </h2>
        <p className="leading-8 text-xl text-main-text/60 text-left w-90">
          Every business has different goals, customers and challenges. RAYGO
          Labs creates digital solutions tailored to the way your business
          actually works - from high-performing websites and modern redesigns to
          custom software, CRM systems, cloud infrastructure and intelligent
          automation.
        </p>
        <div className="relative inline-block">
          <div className=" bg-white/40 w-30 h-10 rounded-full absolute top-1 right-0 blur-3xl"></div>
          <button className="relative text-inter text-lg border py-4 px-8 text-center rounded-xl text-main-text/40 border-text backdrop-blur-lg z-60">
            Discover Raygo Labs
          </button>
        </div>
      </section>

      {/* services section */}
      <section>
        <h2></h2>
      </section>
    </>
  );
};

export default HomePage;
