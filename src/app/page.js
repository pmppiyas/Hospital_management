import Depertment from "@/components/ui/Depertment";
import Banner from "@/Pages/Banner/Banner";
import Body from "@/Pages/Body/Body";

export default function Home() {
  return (
    <div className="border-4 border-yellow-600">
      <Banner></Banner>
      <Depertment></Depertment>
      <Body></Body>
    </div>
  );
}
