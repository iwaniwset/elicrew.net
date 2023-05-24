import React from "react";
import Image from "next/image";
import { data } from "autoprefixer";
import Title from "./Title";

export default function Elicrew() {
  const datas = [
    {
      image: "/img/elicrew/mentor.jpeg",
      title: "Mentor",
      benefit: "Dipandu sarjana pendidikan bahasa asing yang bersertifikat ",
    },
    {
      image: "/img/elicrew/magang2.jpg",
      title: "OJT",
      benefit: "Penempatan Magang di hotel baik hotel dalam maupun luar negeri",
    },

    {
      image: "/img/elicrew/trip.jpg",
      title: "Document",
      benefit: "Dibantu proses document terkait BST, Seaman Book Passport",
    },
    {
      image: "/img/elicrew/seragam.jpg",
      title: "Benefit",
      benefit: "Bebas uang gedung, SPP , 3 seragam dan biaya praktek hotel",
    },
    {
      image: "/img/elicrew/mitra.jpg",
      title: "Dipandu",
      benefit:
        "Dipandu dari mulai pendaftaran, sampai siap bekerja di kapal pesiar",
    },
    {
      image: "/img/elicrew/mess.jpeg",
      title: "Mess",
      benefit:
        "Khusus untuk peserta luar kota disediakan mess, air dan listrik gratis",
    },
  ];

  return (
    <div className="bg-slate-100 w-full">
      <Title title="Mengapa Harus Eli Crew" />
      <div className="container mx-auto grid grid-cols-1 gap-3 md:gap-5 lg:grid-cols-3 md:grid-cols-2 py-5">
        {datas.map((data, index) => (
          <div
            key={index}
            className=" max-w-lg sm:max-w-xl sm:flex md:block  sm:items-center overflow-hidden bg-white border border-gray-200 rounded-lg shadow "
          >
            <a href="#">
              <Image
                className=" rounded-t-lg  sm:rounded-none h-72 object-cover object-center"
                src={data.image}
                width={500}
                height={500}
                alt="Cruise"
                priority={true}
              />
            </a>
            <div className="p-5 sm:p-10">
              <a href="#">
                <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 sm:text-xl">
                {data.benefit}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
