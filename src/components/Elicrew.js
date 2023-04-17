import React from "react";
import Image from "next/image";

export default function Elicrew() {
  const why = [
    {
      image: "/img/imgeli/book.png",
      benefit: "Materi pelatihan yang selalu diupdate sesusai kondisi terkini",
    },
    {
      image: "/img/imgeli/mentorship.png",
      benefit: "Dipandu sarjana pendidikan bahasa asing yang bersertifikat",
    },
    {
      image: "/img/imgeli/hotel.png",
      benefit: "Penempatan Magang di hotel baik hotel dalam maupun luar negeri",
    },
    {
      image: "/img/imgeli/handshake.png",
      benefit: "Jalinan relasi yang sangat luas hampir di seluruh kapal pesiar",
    },
    {
      image: "/img/imgeli/staff.png",
      benefit:
        "Pendampingan mulai dari masa latihan s/d diterima di kapal pesiar",
    },
    {
      image: "/img/imgeli/passport.png",
      benefit: "Dibantu proses document terkait BST, Seaman Book Passport",
    },
    {
      image: "/img/imgeli/money.png",
      benefit:
        "Bebas uang gedung, SPP bulanan, 3Buah seragam dan biaya praktek hotel",
    },
    {
      image: "/img/imgeli/house.png",
      benefit:
        "Khusus untuk peserta luar kota disediakan mess, air dan listrik gratis",
    },
  ];

  return (
    <div className="bg-slate-100">
      <h1 className="text-center pt-5 text-3xl tracking-wider text-slate-800">
        Mengapa Memilih Eli
      </h1>
      <div className="grid grid-cols-2 gap-2 px-2 py-2">
        {why.map((user, index) => (
          <div
            className="aspect-[3/4] p-3 shadow-xl bg-sky-100 flex flex-col justify-center items-center "
            key={index}
          >
            {/* <img src={user.image} alt="" className="" /> */}
            <Image
              src={user.image}
              width={500}
              height={500}
              quality={100}
              alt="img"
            />
            <div className="">
              <h1 className="p-2 text-center text-slate-800">{user.benefit}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
