import Paralax from "@/components/Parallax/Paralax";
import Timeline from "./timeline";
import Location from "@/components/Location";
function page() {
  return (
    <div className="min-h-screen bg-background ">
      <div className="h-20 md:h-24 lg:h-32"></div>
      <Paralax></Paralax>
      <h3
        className="text-2xl text-center bg-gradient-to-r from-[rgba(14,81,250,1)] to-[rgba(209,33,242,1)] bg-[90deg] w-max mx-auto px-4 py-1 text-white mt-10 md:mt-20 font-medium"
        data-aos="fade-down"
        data-aos-delay={200}
      >
        Best Service at Low Cost
      </h3>
      <h4
        className="text-center pt-4 "
        data-aos="fade-down"
        data-aos-delay={200}
      >
        Our This Month Patients
      </h4>

      <Timeline></Timeline>
      <Location></Location>
    </div>
  );
}

export default page;
