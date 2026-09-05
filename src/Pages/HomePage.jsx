const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <section className="pt-30 text-main-text mx-8 space-y-7 ">
        <h3 className="text-text font-mono capitalize text-sm w-70 leading-relaxed tracking-wider">RAYGO LABS / DIGITAL TECHNOLOGY STUDIO</h3>
        <h1 className="text-5xl text-left leading-15  font-semibold w-80  tracking-wide">Build digital experiences that move your business forward.</h1>
        <h2 className="text-main-text/70 text-left leading-10 text-xl w-83 sm:w-86 overflow-hidden">
          RAYGO Labs helps businesses build powerful websites, custom software,
          CRM solutions and cloud-powered digital systems designed to perform,
          scale and grow.
        </h2>
        <div>
          <button>Start Your Project</button>
          <button>Explore Services</button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
