import "./styles.css";
function Paralax() {
  return (
    <div className="parallax h-[300px]  bg-primary">
      <div
        className="parallax-inner h-full flex justify-center items-center flex-col space-y-2"
        data-aos="fade-down"
        data-aos-delay={200}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-primary text-center">
          "Johura Martri Sodon"
        </h1>
        <p className="text-2xl text-primary bg-secondary px-6 py-2 rounded-bl-full rounded-tr-full">
          Since:2005
        </p>
      </div>
    </div>
  );
}

export default Paralax;
