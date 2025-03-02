function Heading({ title, subtitle }) {
  return (
    <div className="text-center py-2 mb-12 border-y-2 border-dotted border-primary w-max mx-auto">
      <h1 className="text-3xl md:text-5xl font-medium text-pretty text-primary">
        {title}
      </h1>
      <p className="md:text-lg italic opacity-70">{subtitle}</p>
    </div>
  );
}

export default Heading;
