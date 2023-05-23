import React from "react";
import Image from "next/image";

const benefits = [
  {
    room: "Air Conditioner Class",
  },
  {
    room: "Pengajar Profesional",
  },
  {
    room: "Materi Up to Date",
  },
  {
    room: "Seragam Kelas",
  },
];

export default function About() {
  return (
    // <div className="relative">
    //   <div className="flex z-10 container  flex-col justify-center items-center px-3 py-4">
    //     <div className="flex items-center gap-4 pt-2 xl:pb-5">
    //       <hr className="w-14 mb-3 h-2 bg-textSecondary rounded-md" />

    //       <h2 className="text-2xl pb-3 sm:pb-6 lg:text-4xl lg:pb-3 font-semibold text-textPrimary">
    //         Tentang Kami
    //       </h2>
    //       <hr className="w-14 mb-3 h-2 bg-textSecondary rounded-md" />
    //     </div>
    //     <h1 className="text-3xl font-bold md:text-4xl xl:text-5xl text-primary mb-1 xl:mb-3  text-center border-sky-900 ">
    //       Ayo Gabung Bersama
    //     </h1>
    //     <h1 className="text-5xl md:text-7xl xl:text-8xl text-center text-primary font-bold mb-3">
    //       Eli Crew Cilacap
    //     </h1>
    //     <hr className="w-20 mb-5 h-2 bg-primary rounded-md" />
    //     <p className="text-slate-500 font-light text-2xl sm:px-5 text-center sm:text-3xl leading-normal sm:leading-relaxed xl:text-4xl xl:leading-relaxed xl:pb-5">
    //       Eli Crew Cilacap merupakan lembaga pendidikan Profesional Di bidang
    //       Training Center Kapal Pesiar, Perhotelan dan Bahasa Inggris yang
    //       terletak di pusat kota Cilacap. Dengan adanya Eli diharapkan dapat
    //       memenuhi permintaan mitra kerja Eli Crew Cilacap dari dunia perhotelan
    //       dan Kapal Pesiar
    //     </p>
    //   </div>
    //   <div className="flex justify-center z-30 py-3 md:py-1 xl:py-2 items-center gap-1 w-full bg-primary">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="#FBEEC1 "
    //       className="w-16 h-16 md:w-28 sm:w-24 sm:h-24 md:h-28 xl:w-32 xl:h-32"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    //       />
    //     </svg>
    //     <div>
    //       <p className="sm:text-2xl xl:text-5xl  font-bold tracking-wider md:text-4xl text-textSecondary">
    //         jam belajar dari Senin s/d Jumat
    //       </p>
    //       <p className="sm:text-2xl xl:text-5xl text-center tracking-wider text-lg font-bold md:text-3xl  text-textSecondary">
    //         Jam 09.00 WIB s/d 14.30 WIB
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gradient-to-t  from-primary to-sky-500 ">
      <div className=" lg:flex lg:py-16 lg:justify-center lg:max-w-4xl container">
        <div
          className="container max-w-xs   sm:max-w-md p-10 mx-auto md:max-w-xl 
      "
        >
          <h1 className="text-slate-900 uppercase font-extrabold mb-3 text-lg sm:text-xl md:text-2xl">
            Bingung Masalah Biaya ??
          </h1>
          <h1 className="text-textSecondary text-2xl font-bold mb-3 sm:text-3xl md:text-4xl uppercase">
            Konsultasikan dengan kami. Biaya dapat diangsur sampai sebelum OJT
          </h1>
          <h2 className="mb-2 text-lg text-slate-900 sm:text-xl md:text-2xl">
            Di Eli kita belajar setiap Senin - Jumat Pukul 09.00 s/d 14.30
            dengan fasilitas.
          </h2>
          {benefits.map((benefit, index) => (
            <ul className="px-5" key={index}>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-amber-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span className="text-lg text-textSecondary sm:text-xl md:text-2xl">
                  {benefit.room}
                </span>{" "}
              </li>
            </ul>
          ))}
          <button className="w-full  md:mt-10 bg-amber-500 text-textSecondary font-bold py-2 mt-3 shadow-xl rounded-lg md:text-xl">
            CEK HARGA
          </button>
        </div>
        <div className=" lg:relative lg:flex lg:justify-center lg:items-center sm:container  sm:max-w-md mx-auto md:max-w-xl py-5">
          <Image
            className=" hidden lg:block absolute lg:-top-12  lg:-right-24  lg:max-w-[15rem]"
            src={"/img/lingkaran.png"}
            width={500}
            height={500}
            alt="Cruise"
            priority={true}
          />
          <Image
            className=" relative object-cover rounded-xl object-center h-64 sm:h-72 md:h-96 lg:h-[35rem] lg:drop-shadow-lg"
            src={"/img/staff.jpg"}
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
