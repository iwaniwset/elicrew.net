import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      <div className="flex z-10  flex-col justify-center items-center px-3 py-4">
        <div className="flex items-center gap-4 pt-2 xl:pb-5">
          <hr className="w-14 mb-3 h-2 bg-textSecondary rounded-md" />

          <h2 className="text-3xl pb-3 sm:pb-6 lg:text-4xl lg:pb-3 font-semibold text-textPrimary">
            Tentang Kami
          </h2>
          <hr className="w-14 mb-3 h-2 bg-textSecondary rounded-md" />
        </div>
        <h1 className="text-3xl font-bold md:text-4xl xl:text-5xl text-primary mb-1 xl:mb-3  text-center border-sky-900 ">
          Ayo Gabung Bersama
        </h1>
        <h1 className="text-5xl md:text-7xl xl:text-8xl text-primary font-bold mb-3">
          Eli Crew Cilacap
        </h1>
        <hr className="w-20 mb-5 h-2 bg-primary rounded-md" />
        <p className="text-slate-500 font-light text-2xl sm:px-5 text-center sm:text-3xl leading-normal sm:leading-relaxed xl:text-4xl xl:leading-relaxed">
          Eli Crew Cilacap merupakan lembaga pendidikan Profesional Di bidang
          Training Center Kapal Pesiar, Perhotelan dan Bahasa Inggris yang
          terletak di pusat kota Cilacap. Dengan adanya Eli diharapkan dapat
          memenuhi permintaan mitra kerja Eli Crew Cilacap dari dunia perhotelan
          dan Kapal Pesiar
        </p>
      </div>
      <div className="flex justify-center z-30 py-3  items-center gap-1 w-full bg-sky-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-14 h-14 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>
          <p className="text-slate-200 tracking-wider">
            jam belajar dari Senin s/d Jumat
          </p>
          <p className="text-center tracking-wider text-slate-300">
            Jam 09.00 WIB s/d 14.30 WIB
          </p>
        </div>
      </div>
    </div>
  );
}
