import React from "react";
import Title from "./Title";
import Image from "next/image";

export default function Pencapaian() {
  return (
    <div className=" ">
      <Title title="Pencapaian" />

      <div className="lg:flex lg:container   ">
        <div className="container mx-auto text-center px-2 py-5 md:p-16 lg:py-16 lg:pr-16 lg:pl-0 xl:py-10 xl:pr-10 xl:pl-0  lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold text-transparent md:uppercase bg-clip-text bg-gradient-to-t from-primary  to-sky-500 xl:text-5xl">
            Sejak 2005, Telah Sukses membantu ribuan siswa berangkat bekerja di
            Kapal Pesiar
          </h1>
          <h2 className="text-lg md:mb-10 sm:text-xl text-slate-900 mt-5 mb-6">
            Kami berkomitmen membantu siswa-siswi kami dapat lulus dan bekerja
            di kapal pesiar Asia, Eropa dan Amerika. Memenuhi kebutuhan mitra
            kami dan menjadi jembatan untuk mencukupi kebutuhan crew kapal
            pesiar.
          </h2>
          <a
            href="#"
            className="py-2 px-10 sm:py-3 sm:px-12 bg-primary sm:text-lg text-textSecondary rounded shadow-lg font-semibold"
          >
            Alumni Elic Crew
          </a>
        </div>
        <div className="w-full mt-6 lg:mt-0 xl:py-10">
          <Image
            className=" object-cover object-center drop-shadow-lg mx-auto   h-72 sm:h-80 md:h-96 lg:max-w-md lg:h-full 2xl:pr-0"
            src={"/img/pencapaian/image.jpg"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
