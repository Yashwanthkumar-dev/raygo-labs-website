import { Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

const HomePage = () => {
  const serviceDetails = [
    {
      id: "01",
      title: "Website Development",
      description:
        "Modern, responsive and conversion-focused websites built around your brand, business goals and customers.",
      cta: "Explore website development",
    },
    {
      id: "02",
      title: "Website Redesign & UI/UX",
      description:
        "Transform outdated websites into modern, intuitive and professional digital experiences with better structure and usability.",
      cta: "Redesign your website",
    },
    {
      id: "03",
      title: "Custom Software Development",
      description:
        "Business-focused software and web applications designed around your processes, requirements and long-term goals.",
      cta: "Build custom software",
    },
    {
      id: "04",
      title: "CRM Solutions",
      description:
        "Centralize leads, customers, sales activities, follow-ups and workflows.",
      cta: "Build a CRM",
    },
    {
      id: "05",
      title: "Cloud and AWS Solution",
      description:
        "Deploy and scale modern applications with practical AWS and cloud solutions built for reliability and growth.",
      cta: "Explore cloud solutions",
    },
    {
      id: "06",
      title: "AI & Automation",
      description:
        "Automate repetitive work and connect systems where intelligent technology creates real value.",
      cta: "Automate your business",
    },
    {
      id: "07",
      title: "Web Applications",
      description:
        "Build dashboards, portals, internal systems and customer-facing web applications tailored to your needs.",
      cta: "Build a web App",
    },
    {
      id: "08",
      title: "Maintenance & Support",
      description:
        "Keep your website and digital products secure, updated, optimized and reliable after launch.",
      cta: "Get Support",
    },
  ];

  return (
    <>
      {/* hero section */}
      <section className="pt-30 text-main-text mx-8 space-y-7 py-20">
        <h3 className="text-text font-mono capitalize text-sm w-70 leading-relaxed tracking-wider">
          RAYGO LABS / DIGITAL TECHNOLOGY STUDIO
        </h3>
        <h1 className="text-5xl text-left leading-15 font-semibold w-80 tracking-wide">
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
          <button className="relative cursor-pointer py-4 px-8 text-center font-inter inline-flex justify-center text-base uppercase text-main-text rounded-lg border-solid transition-transform duration-300 ease-in-out group w-fit outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
            <span className="relative z-20">Explore Services</span>

            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
          </button>
        </div>
      </section>

      {/* Introduction section */}
      <section className="border-text/30 border-t text-main-text mx-8 py-10 space-y-12 overflow-hidden">
        <h2 className="font-semibold text-3xl leading-11 w-80">
          Technology built around your business.
        </h2>
        <p className="leading-8 text-xl text-main-text/60 text-left w-90">
          Every business has different goals, customers and challenges. RAYGO
          Labs creates digital solutions tailored to the way your business
          actually works - from high-performing websites and modern redesigns to
          custom software, CRM systems, cloud infrastructure and intelligent
          automation.
        </p>
        <div className="relative inline-block z-50">
          <div className="bg-white/40 w-30 h-10 rounded-full absolute top-1 right-0 blur-3xl"></div>
          <button className="relative text-inter text-lg border py-4 px-8 text-center rounded-xl text-main-text/40 border-text backdrop-blur-lg z-40">
            Discover Raygo Labs
          </button>
        </div>
      </section>

      {/* services section */}
      <section className="mx-8 text-main-text py-10 border-y border-text/30 space-y-8">
        <h2 className="text-2xl capitalize font-bold tracking-wide">
          What we build
        </h2>
        <h2 className="text-xl capitalize font-semibold leading-8">
          Everything You Need to Build Your Digital Presence.
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full py-12"
        >
          {serviceDetails.map((servcies) => (
            <SwiperSlide
              key={servcies.id}
              className="!w-[300px] sm:!w-[340px] !h-[420px]"
            >
              {({ isActive }) => (
                <div
                  className={`relative h-full p-8 rounded-3xl transition-all duration-500 flex flex-col justify-between ${
                    isActive
                      ? "bg-card border-2 border-main-text shadow-xl shadow-main-text/30 opacity-100 scale-100 z-20"
                      : "bg-card/40 border border-white/10 opacity-30 backdrop-blur-md scale-90 z-0"
                  }`}
                >
                  <div className="space-y-4">
                    <span
                      className={`text-sm font-mono font-bold block transition-colors ${
                        isActive ? "text-main-text" : "text-zinc-600"
                      }`}
                    >
                      {servcies.id}
                    </span>
                    <h3
                      className={`text-2xl font-bold transition-colors ${
                        isActive ? "text-white" : "text-zinc-500"
                      }`}
                    >
                      {servcies.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors ${
                        isActive ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {servcies.description}
                    </p>
                  </div>

                  <div
                    className={`pt-4 border-t flex items-center justify-between text-xs font-semibold transition-all ${
                      isActive
                        ? "border-white/10 text-main-text opacity-100"
                        : "border-white/5 text-main-text opacity-0"
                    }`}
                  >
                    <span>{servcies.cta}</span>
                    <span>→</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HomePage;