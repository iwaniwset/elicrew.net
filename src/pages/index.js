// import Navbar from "../components/Navbar";
// import NavbarMenu from "../components/NavbarMenu";
import Head from "next/head";
// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Elicrew from "@/components/Elicrew";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Maps from "@/components/Maps";
import Pencapaian from "@/components/Pencapaian";
import Closing from "../components/Closing";
import Footer from "@/components/Footer";
// import Workinghour from "@/components/workinghour";

export default function Home() {
  // const [active, setActive] = useState(false);

  // const toggleActive = () => {
  //   setActive(!active);
  // };
  return (
    <>
      <Head>
        <title>Eli Crew Cilacap</title>
        <meta
          name="description"
          content="Pusat Pelatihan Bahasa Inggris, Kapal Pesiar & Perhotelan di Cilacap"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className=" w-full">
        {/* <Navbar /> */}
        {/* <NavbarMenu /> */}
        {/* <Workinghour /> */}
        <Hero />
        <Elicrew />
        <About />
        <Pencapaian />
        <Gallery />
        <Closing />
        <Program />
        <Maps />
        <Footer />
      </div>
    </>
  );
}
