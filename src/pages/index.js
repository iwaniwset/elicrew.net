// import Navbar from "../components/Navbar";
// import NavbarMenu from "../components/NavbarMenu";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Elicrew from "@/components/Elicrew";
import Program from "@/components/Program";

export default function Home() {
  // const [active, setActive] = useState(false);

  // const toggleActive = () => {
  //   setActive(!active);
  // };
  return (
    <div className=" w-full">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Elicrew />
      <Program />
    </div>
  );
}
