import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  // const images = ["/img/logo2.jpg", "/img/logo3.jpg", "/img/logo5.jpg"];

  return (
    <div className="w-full bg-black h-[32rem] xl:h-[37rem] relative">
      <Image
        className="w-full h-full object-cover object-left"
        src={"/img/logo3.jpg"}
        width={1000}
        height={1000}
        alt="Cruise"
        priority={true}
      />
      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-25 bg-cover bg-center"></div>
      <div className="absolute top-5 w-full ml-5 xl:ml-10 left-1/2 -translate-x-1/2">
        <h2 className=" tracking-wide mb- text-3xl lg:text-5xl mb-2 font-base  text-slate-200 ">
          Kerja Di Kapal Pesiar ??
        </h2>
        <h1 className=" tracking-wide text-amber-400 text-7xl lg:text-8xl mb-2">
          Gaji Dollar
        </h1>
        <h3 className=" tracking-wide text-slate-300 text-4xl lg:text-5xl">
          Bisa Keliling Dunia ??
        </h3>
      </div>
      <div className="absolute bottom-3 w-full px-5 left-1/2 -translate-x-1/2">
        <h1 className="text-4xl xl:text-6xl mb-2 text-center text text-amber-400 tracking-wide ">
          Eli Crew Cilacap
        </h1>
        <h2 className="text-2xl xl:text-4xl text-center text text-slate-300 tracking-wider ">
          Pelatihan Singkat Calon Crew Perhotelan & Kapal Pesiar
        </h2>
      </div>
    </div>
  );
}
