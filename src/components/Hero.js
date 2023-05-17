// import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Hero() {
  // const images = ["/img/logo2.jpg", "/img/logo3.jpg", "/img/logo5.jpg"];

  return (
    // <Splide
    //   options={{
    //     type: "loop",
    //     perPage: 1,
    //     perMove: 1,
    //     autoplay: true,
    //     pauseOnHover: false,
    //     resetProgress: false,
    //     arrows: false,
    //     pagination: false,
    //   }}
    //   aria-label="My Favorite Images"
    // >
    //   <SplideSlide className="w-full  h-[32rem] xl:h-[50rem] relative">
    //     {/* <img src="image1.jpg" alt="Image 1" /> */}
    //     <Image
    //       className="w-full h-full object-cover object-center"
    //       src={"/img/logo3.jpg"}
    //       width={1000}
    //       height={1000}
    //       alt="Cruise"
    //       priority={true}
    //     />
    //     <div className="bg-black w-full h-full absolute top-0 left-0 opacity-50 bg-cover bg-center"></div>
    //     <div className="absolute max-w-lg lg:max-w-2xl 2xl:max-w-4xl top-5 ml-3 md:left-5 lg:left-10">
    //       <h2 className=" tracking-wide text-3xl lg:text-5xl font-extrabold mb-1 font-base  text-textSecondary ">
    //         Kerja Di Kapal Pesiar ??
    //       </h2>
    //       <h1 className=" tracking-wide text-amber-400 text-7xl lg:text-8xl font-extrabold mb-2">
    //         Gaji Dollar
    //       </h1>
    //       <h3 className=" tracking-wide font-bold text-textSecondary text-4xl lg:text-5xl">
    //         Bisa Keliling Dunia ??
    //       </h3>
    //     </div>
    //     <div className="absolute bottom-3 w-full px-5 left-1/2 -translate-x-1/2">
    //       <h1 className="text-4xl font-bold xl:text-6xl mb-2 text-center text text-amber-400 tracking-wide ">
    //         Eli Crew Cilacap
    //       </h1>
    //       <h2 className="text-2xl font-bold mb-3 xl:text-4xl text-center text text-slate-300 tracking-wider ">
    //         Pelatihan Singkat Calon Crew Perhotelan & Kapal Pesiar
    //       </h2>
    //     </div>
    //   </SplideSlide>
    //   <SplideSlide className="w-full  h-[32rem] xl:h-[50rem] relative">
    //     {/* <img src="image1.jpg" alt="Image 1" /> */}
    //     <Image
    //       className="w-full h-full object-cover object-center"
    //       src={"/img/logo2.jpg"}
    //       width={1000}
    //       height={1000}
    //       alt="Cruise"
    //       priority={true}
    //     />
    //     <div className="bg-black w-full h-full absolute top-0 left-0 opacity-25 bg-cover bg-center"></div>

    //     <div className="absolute top-5 w-full px-5 left-1/2 -translate-x-1/2">
    //       <h1 className="text-4xl font-bold xl:text-6xl md:text-5xl mb-3 text-center text text-sky-900 tracking-wide ">
    //         Eli Crew Cilacap
    //       </h1>
    //       <h2 className="text-2xl font-bold md:text-3xl mb-3 xl:text-4xl text-center text text-slate-900 tracking-wider ">
    //         SoLution for Success In Hotel & Cruise Line
    //       </h2>
    //     </div>
    //     <div className="absolute bottom-3 w-full px-5 left-1/2 -translate-x-1/2">
    //       <h2 className="text-2xl font-bold md:px-10 md:text-3xl px-1 mb-3 xl:text-4xl text-center text text-amber-400 tracking-wider 2xl:text-left 2xl:px-2 2xl:max-w-lg 2xl:tracking-widest 2xl:leading-snug 2xl:text-[2.5rem]">
    //         Pusat Pelatihan Bahasa Inggris, Perhotelan, & Kapal Pesiar Terbaik
    //         di Cilacap
    //       </h2>
    //     </div>
    //   </SplideSlide>
    //   <SplideSlide className="w-full  h-[32rem] xl:h-[50rem] relative">
    //     {/* <img src="image1.jpg" alt="Image 1" /> */}
    //     <Image
    //       className="w-full h-full object-cover object-center"
    //       src={"/img/logo5.jpg"}
    //       width={1000}
    //       height={1000}
    //       alt="Cruise"
    //       priority={true}
    //     />
    //     <div className="bg-black w-full h-full absolute top-0 left-0 opacity-25 bg-cover bg-center"></div>
    //     <div className="absolute bottom-5 2xl:bottom-0 w-full px-5 left-1/2 -translate-x-1/2">
    //       <h1 className="text-4xl font-bold xl:text-6xl mb-2 text-center text text-sky-50 tracking-wide ">
    //         Eli Crew Cilacap
    //       </h1>
    //       <h2 className="text-xl md:text-3xl font-bold 2xl:px-14 2xl:leading-snug lg:leading-snug mb-3 xl:text-4xl text-center text text-amber-500 tracking-wider ">
    //         Jl. Kelud No.6, Cilacap, Sidanegara, Kec. Cilacap Tengah, Kabupaten
    //         Cilacap, Jawa Tengah 53223
    //       </h2>
    //     </div>
    //   </SplideSlide>
    // </Splide>
    <header className="bg-gradient-to-t from-primary to-sky-500 py-20">
      {/* <nav>
        <h1>ELI CREW</h1>

      </nav> */}
      <div className="xl:flex xl:flex-row-reverse xl:items-center xl:justify-center 2xl:container">
        <div className="relative xl:basis-1/2  ">
          <Image
            className=" absolute max-w-[13rem] -bottom-5 xl:-top-36 -left-24 xl:-left-16 md:max-w-xs"
            src={"/img/lingkaran.png"}
            width={500}
            height={500}
            alt="Cruise"
            priority={true}
          />
          <div className="w-full h-full flex items-center  px-10 xl:px-0 xl:justify-center pt-10 pb-5  overflow-hidden">
            <Image
              className=" object-cover object-center drop-shadow-lg mx-auto rounded-xl md:max-w-2xl lg:max-w-4xl xl:max-w-xl "
              src={"/img/hero/hero1.jpg"}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
          </div>
        </div>
        <div className="container md:px-10 xl:basis-1/2   ">
          <h1 className="  text-xl font-bold tracking-wide text-center uppercase text-textSecondary pt-3 sm:text-2xl md:text-left md:pt-5 lg:text-3xl xl:text-2xl">
            Kerja Di Kapal Pesiar ?
          </h1>
          <h1 className="text-3xl  sm:text-4xl px-2 max-w-xs sm:max-w-sm mx-auto text-center mt-4 font-semibold text-textSecondary md:text-left md:max-w-3xl md:w-full md:px-0 md:text-5xl lg:max-w-5xl lg:text-6xl  ">
            Pusat Pelatihan{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-text to-amber-500 font-extrabold">
              {" "}
              Bahasa Inggris, Perhotelan, & Kapal Pesiar
            </span>{" "}
            Terbaik di Cilacap
          </h1>
          <h4 className="max-w-xs sm:max-w-sm px-2 mx-auto text-center text-xl mt-4 leading-normal text-textSecondary md:text-left md:max-w-3xl md:w-full md:px-0 md:text-xl lg:text-3xl lg:tracking-wider lg:max-w-5xl xl:text-2xl ">
            Eli Crew Cilacap merupakan lembaga pendidikan Profesional Di bidang
            Training Center yang memiliki 2 Program Andalan yakni Akselerasi (6
            Bulan) & Program Reguler (12 Bulan)
          </h4>
          <div className=" mt-7 flex justify-center md:justify-start ">
            <button className="px-28 sm:px-36 rounded-md py-2 sm:py-3 bg bg-gradient-to-r from-amber-500 via-text to-amber-500 text-lg sm:text-xl uppercase tracking-wider font-semibold shadow-lg text-slate-900 md:px-16 lg:text-2xl">
              Join Us !!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
