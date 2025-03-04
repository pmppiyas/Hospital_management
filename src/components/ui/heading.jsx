
function Heading({ title, subtitle }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={ 100}
    
      className="text-center py-2 mb-12 border-y-2 border-dotted border-primary w-max mx-auto"
    >
      <h1 className="text-3xl md:text-5xl font-medium text-pretty text-primary">
        {title}
      </h1>
      <p className=" italic opacity-70">{subtitle}</p>
    </div>
  );
}

export default Heading;
