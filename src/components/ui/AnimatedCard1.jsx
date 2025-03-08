import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import doctor1 from "@/assets/doctor.png";

const Animated1Card = ({ testimonial }) => {
  return (
    <div className=" w-full h-[250px] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-primary before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0] border-2 border-primary hover:border-none">
      {/*  arrow icon  */}
      <ArrowBigLeft className="absolute top-2 z-20 right-2 text-[1rem] text-background group-hover:-rotate-90 transition-transform " />

      <div className="flex flex-col items-center justify-center">
        {/*  image  */}
        <div className="h-[70px] w-[70px] rounded-full overflow-hidden  transform  group-hover:scale-110 transition-all duration-500 ease-out">
          <Image src={doctor1} alt={"logo"}></Image>
        </div>
        {/*  text  */}
        <h3 className="text-[1.5rem] font-bold transition-all duration-500 group-hover:text-background ease-out">
          {testimonial.author}
        </h3>
        <p className="text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-background">
          ZenUI Library is an Tailwind CSS components library for any needs.
          Comes with UI examples & blocks, templates, Icons, Color Palette and
          more.
        </p>
      </div>
    </div>
  );
};

export default Animated1Card;
