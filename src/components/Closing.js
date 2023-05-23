import React from "react";

export default function Closing() {
  return (
    <div className="bg-[url('/img/pencapaian/closing.jpg')]">
      <div className="w-full h-full bg-white bg-opacity-70">
        <div className="container max-w-md mx-auto  text-center  px-3 py-10">
          <h4 className="text-xl text-slate-800">Masih cari yang beresiko</h4>
          <h1 className="text-3xl mt-5 text-slate-900 sm:text-4xl">
            Mending Pilih yang pasti pasti aja yuk !!
          </h1>
          <h4 className="py-1 text-slate-700 ">
            Pilih Karirmu dengan bekerja di Kapal Pesiar
          </h4>
          <div className="flex mt-3 justify-center gap-3 flex-col items-center">
            <button className="w-52 py-2 bg-amber-500 rounded-md font-semibold shadow-lg">
              Cek Program
            </button>
            <button className="w-52 py-2 bg-primary text-textSecondary rounded-md font-semibold shadow-lg">
              Konsultasi
            </button>
          </div>
          <h2 className="mt-5 text-slate-700 sm:px-10">
            Kami tunggu kedatanganmu, Ayo Gabung Bersama Eli Crew
          </h2>
        </div>
      </div>
    </div>
  );
}
