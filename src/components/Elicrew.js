import React from "react";
import Image from "next/image";

export default function Elicrew() {
  const why = [
    {
      image: "/img/imgeli/bookNewWhite.png",
      title: "Materi",
      benefit: "Materi pelatihan yang selalu diupdate sesusai kondisi terkini",
    },
    {
      image: "/img/imgeli/mentorshipWhite.png",
      title: "Mentor",
      benefit: "Dipandu sarjana pendidikan bahasa asing yang bersertifikat",
    },
    {
      image: "/img/imgeli/hotelWhite.png",
      title: "OJT",
      benefit: "Penempatan Magang di hotel baik hotel dalam maupun luar negeri",
    },
    {
      image: "/img/imgeli/relationshipWhite.png",
      title: "Relasi",
      benefit: "Jalinan relasi yang sangat luas hampir di seluruh kapal pesiar",
    },
    {
      image: "/img/imgeli/mentorshipWhite.png",
      title: "Didampingi",
      benefit:
        "Pendampingan mulai dari masa latihan s/d diterima di kapal pesiar",
    },
    {
      image: "/img/imgeli/passportWhite.png",
      title: "Document",
      benefit: "Dibantu proses document terkait BST, Seaman Book Passport",
    },
    {
      image: "/img/imgeli/moneyWhite.png",
      title: "Benefit",
      benefit: "Bebas uang gedung, SPP , 3 seragam dan biaya praktek hotel",
    },
    {
      image: "/img/imgeli/houseWhite.png",
      title: "Mess",
      benefit:
        "Khusus untuk peserta luar kota disediakan mess, air dan listrik gratis",
    },
  ];

  return (
    <div className="py-5">
      <div className="flex w-full justify-center items-center gap-4 pt-2 xl:pb-5">
        <hr className="w-10 mb-3 h-2 bg-textPrimary rounded-md" />

        <h2 className="text-3xl pb-3 sm:pb-6 lg:text-4xl lg:pb-3 font-semibold text-primary">
          Mengapa ELi Crew
        </h2>
        <hr className="w-10 mb-3 h-2 bg-textPrimary rounded-md" />
      </div>
      <div className="grid grid-cols-2 gap-2 px-2 py-2 md:grid-cols-3 xl:grid-cols-4">
        {why.map((user, index) => (
          <div
            className="aspect-[3/4] sm:pt-5 p-3 shadow-xl bg-primary flex flex-col justify-start items-center "
            key={index}
          >
            {/* <img src={user.image} alt="" className="" /> */}
            <Image
              src={user.image}
              width={500}
              height={500}
              quality={100}
              alt="img"
              className=" pt-2 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36"
            />
            <div className="pt-1">
              <h1 className="p-1 font-bold tracking-wider mt-3 text-center text-3xl text-textPrimary sm:text-4xl 2xl:text-5xl">
                {user.title}
              </h1>
              <h2 className="text-center text-textSecondary sm:text-xl text-lg mt-2  lg:text-2xl 2xl:text-3xl 2xl:mt-4 2xl:leading-normal">
                {user.benefit}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
