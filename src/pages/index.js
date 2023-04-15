// import Navbar from "../components/Navbar";
// import NavbarMenu from "../components/NavbarMenu";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";

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
      {/* <NavbarMenu /> */}
      {/* <div className="h-screen flex-col w-full bg-blue-500 flex justify-center items-center">
        <Image
          src="/img/maintenance.png"
          alt="image-test"
          width={500}
          height={500}
          priority={true}
        />
        <h1 className="text-center font-semibold text-4xl mt-5">
          This website under maintenance
        </h1>
        <h1 className="text-6xl font-bold mt-10 mb-3">ELI CREW CILACAP</h1>
        <p className="text-3xl font-semibold text-slate-900">
          WA : +62 852-2702-1227
        </p>
      </div> */}
    </div>
  );
}
