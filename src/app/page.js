import Depertment from "@/components/ui/Depertment";
import Banner from "@/Pages/Banner/Banner";
import Services from "@/Pages/Services/Services";
import Testimonial from "@/Pages/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Depertment></Depertment>
      <Services></Services>
      <Testimonial></Testimonial>
    </div>
  );
}
