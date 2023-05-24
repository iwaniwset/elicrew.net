// import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";

export default function Hero() {
  // const images = ["/img/logo2.jpg", "/img/logo3.jpg", "/img/logo5.jpg"];

  return (
    <header className="bg-gradient-to-t mx-auto from-primary to-sky-500 py-20">
      {/* <nav>
        <h1>ELI CREW</h1>

      </nav> */}
      <div className="xl:flex xl:flex-row-reverse xl:items-center xl:justify-center 2xl:container">
        <div className="relative xl:basis-1/2  ">
          <Image
            className=" absolute md:-bottom-5 max-w-[13rem] -bottom-10 xl:-top-36 -left-24 xl:-left-16 md:max-w-xs"
            src={"/img/lingkaran.png"}
            width={500}
            height={500}
            alt="Cruise"
            priority={true}
          />
          <div className="w-full h-full flex items-center  px-2 xl:px-0 xl:justify-center pt-10 pb-5  overflow-hidden">
            <Image
              className=" object-cover object-center drop-shadow-lg mx-auto  container lg:max-w-4xl xl:max-w-2xl "
              src={"/img/hero/hero1.jpg"}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
          </div>
        </div>
        <div className="container   xl:basis-1/2   ">
          <h1 className="  text-xl mx-auto font-bold tracking-wide text-center uppercase text-textSecondary  pt-3 sm:text-2xl md:text-left md:pt-5 lg:text-4xl lg:max-w-4xl lg:content-start-start xl:text-2xl  ">
            eli crew cilacap
          </h1>
          <h1 className="text-center mx-auto mt-5 text-2xl uppercase font-bold text-textSecondary sm:text-4xl md:text-left lg:max-w-4xl  md:text-5xl">
            Pusat Pelatihan{" "}
            <span className="  text-amber-500 font-extrabold">
              {" "}
              Kapal Pesiar, Perhotelan, & Bahasa Inggris
            </span>{" "}
            Terbaik di Cilacap
          </h1>
          <h4 className="max-w-xs sm:max-w-sm px-2 mx-auto text-center mt-4 leading-normal text-textSecondary md:text-left md:max-w-3xl md:w-full md:px-0 md:text-xl lg:text-3xl lg:tracking-wider lg:max-w-4xl xl:text-2xl  ">
            Eli Crew Cilacap merupakan lembaga pendidikan Profesional Di bidang
            Training Center yang memiliki 2 Program Andalan yakni Akselerasi
            (6Bulan) & Program Reguler (10Bulan)
          </h4>

          <div className="w-full lg:max-w-4xl xl:w-96 xl:mx-0 container mx-auto mt-5 flex justify-center rounded-md py-2 sm:py-3 bg bg-gradient-to-r from-amber-500 via-text to-amber-500 shadow-lg ">
            <Link
              href="https://wa.link/25ms0g"
              className="w-full  text-lg sm:text-xl text-center uppercase tracking-wider font-semibold  text-slate-900 md:px-16 lg:text-2xl lg:max-w-xs  lg:mx-auto xl:w-64"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
