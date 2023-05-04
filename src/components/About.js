import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      <div className="flex z-10  flex-col justify-center items-center px-3 py-4">
        <h1 className="text-2xl text-sky-950 mb-2  text-center border-sky-900 ">
          Ayo Gabung Awali Karirmu bersama Eli Crew Cilacap!!!
        </h1>
        <hr className="w-14 h-2 bg-primary rounded-md" />
        <p className="text-sky-700 text-center tracking-wide">
          Dengan metode Khusus kami yang efektif dan terintegrasi, kami pandu
          anda untuk dapat{" "}
          <span className=" text-sky-900">
            {" "}
            bekerja di hotel / kapal pesiar Asia, Eropa & Amerika{" "}
          </span>
          dengan cepat mudah dan dengan biaya super hemat
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
