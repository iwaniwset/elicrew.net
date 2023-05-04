// import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Hero() {
  // const images = ["/img/logo2.jpg", "/img/logo3.jpg", "/img/logo5.jpg"];

  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        perMove: 1,
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        arrows: false,
        pagination: false,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide className="w-full  h-[32rem] xl:h-[37rem] relative">
        {/* <img src="image1.jpg" alt="Image 1" /> */}
        <Image
          className="w-full h-full object-cover object-center"
          src={"/img/logo3.jpg"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="bg-black w-full h-full absolute top-0 left-0 opacity-50 bg-cover bg-center"></div>
        <div className="absolute max-w-lg lg:max-w-2xl 2xl:max-w-4xl top-5 ml-3 md:left-5 lg:left-10">
          <h2 className=" tracking-wide text-3xl lg:text-5xl font-extrabold mb-1 font-base  text-textSecondary ">
            Kerja Di Kapal Pesiar ??
          </h2>
          <h1 className=" tracking-wide text-amber-400 text-8xl lg:text-8xl font-extrabold mb-2">
            Gaji Dollar
          </h1>
          <h3 className=" tracking-wide font-bold text-textSecondary text-4xl lg:text-5xl">
            Bisa Keliling Dunia ??
          </h3>
        </div>
        <div className="absolute bottom-3 w-full px-5 left-1/2 -translate-x-1/2">
          <h1 className="text-4xl font-bold xl:text-6xl mb-2 text-center text text-amber-400 tracking-wide ">
            Eli Crew Cilacap
          </h1>
          <h2 className="text-2xl font-bold mb-3 xl:text-4xl text-center text text-textSecondary tracking-wider ">
            Pelatihan Singkat Calon Crew Perhotelan & Kapal Pesiar
          </h2>
        </div>
      </SplideSlide>
      <SplideSlide className="w-full  h-[32rem] xl:h-[37rem] relative">
        {/* <img src="image1.jpg" alt="Image 1" /> */}
        <Image
          className="w-full h-full object-cover object-center"
          src={"/img/logo2.jpg"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="bg-black w-full h-full absolute top-0 left-0 opacity-25 bg-cover bg-center"></div>

        <div className="absolute top-5 w-full px-5 left-1/2 -translate-x-1/2">
          <h1 className="text-4xl font-bold xl:text-6xl md:text-5xl mb-3 text-center text text-sky-900 tracking-wide ">
            Eli Crew Cilacap
          </h1>
          <h2 className="text-2xl font-bold md:text-3xl mb-3 xl:text-4xl text-center text text-slate-900 tracking-wider ">
            SoLution for Success In Hotel & Cruise Line
          </h2>
        </div>
        <div className="absolute bottom-3 w-full px-5 left-1/2 -translate-x-1/2">
          <h2 className="text-2xl font-bold md:px-10 md:text-3xl px-1 mb-3 xl:text-4xl text-center text text-amber-400 tracking-wider 2xl:text-left 2xl:px-2 2xl:max-w-lg 2xl:tracking-widest 2xl:leading-snug 2xl:text-[2.5rem]">
            Pusat Pelatihan Bahasa Inggris, Perhotelan, & Kapal Pesiar Terbaik
            di Cilacap
          </h2>
        </div>
      </SplideSlide>
      <SplideSlide className="w-full  h-[32rem] xl:h-[37rem] relative">
        {/* <img src="image1.jpg" alt="Image 1" /> */}
        <Image
          className="w-full h-full object-cover object-center"
          src={"/img/logo5.jpg"}
          width={1000}
          height={1000}
          alt="Cruise"
          priority={true}
        />
        <div className="bg-black w-full h-full absolute top-0 left-0 opacity-25 bg-cover bg-center"></div>
        <div className="absolute bottom-5 2xl:bottom-0 w-full px-5 left-1/2 -translate-x-1/2">
          <h1 className="text-4xl font-bold xl:text-6xl mb-2 text-center text text-sky-50 tracking-wide ">
            Eli Crew Cilacap
          </h1>
          <h2 className="text-xl md:text-3xl font-bold 2xl:px-14 2xl:leading-snug lg:leading-snug mb-3 xl:text-4xl text-center text text-amber-500 tracking-wider ">
            Jl. Kelud No.6, Cilacap, Sidanegara, Kec. Cilacap Tengah, Kabupaten
            Cilacap, Jawa Tengah 53223
          </h2>
        </div>
      </SplideSlide>
    </Splide>
  );
}
