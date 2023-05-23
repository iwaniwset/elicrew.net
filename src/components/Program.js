import React from "react";
import Image from "next/image";
import Title from "./Title";

export default function Program() {
  const imageSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-primary"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
  const imageSvg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6 text-amber-500"
    >
      <path
        fill-rule="evenodd"
        d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );

  const syaratRegs = [
    "Pria Wanita usia 18 Tahun s/d 29 Tahun",
    "Lulusan Minimal SMU/SMK/Paket C/Sederajat",
    "Tidak mengidap penyakit kronis & Buta warna",
    "Tinggi Wanita minimal 155cm & Pria 160 cm",
  ];
  const syaratAks = [
    "Pria Wanita usia 21 Tahun s/d 29 Tahun",
    "Lulusan Minimal SMU/SMK/Paket C/Sederajat",
    "Tidak mengidap penyakit kronis & Buta warna",
    "Tinggi Wanita minimal 155cm & Pria 160 cm",
    "Berbahasa Inggris Aktif / Pernah mengikuti training",
  ];
  const BayarRegs = [
    "Biaya registrasi pendaftaran Rp. 500.000 dibayarkan pada saat  mendaftar",
    "Biaya Awal Pelatihan Rp. 6.500.000,- harus sudah dibayar paling lambat dihari pertama pelatihan dimulai",
    "Angsuran II Rp. 2.500.000,- dibayarkan diawal bulan kedua masa pelatihan",
    "Angsuran III Rp. 2.500.000,- harus sudah dilunasi di awal bulan  ketiga masa pelatihan ( paling lambat sebelum masa OJT di hotel)",
  ];
  const BayarAks = [
    "Biaya registrasi pendaftaran Rp. 500.000 dibayarkan pada saat  mendaftar",
    "Biaya Awal Pelatihan Rp. 10.500.000,- harus sudah dibayar paling lambat dihari pertama pelatihan dimulai",
    "Angsuran II Rp. 2.500.000,- dibayarkan diawal bulan kedua masa pelatihan",
    "Angsuran III Rp. 2.500.000,- harus sudah dilunasi di awal bulan  ketiga masa pelatihan ( paling lambat sebelum masa OJT di hotel)",
  ];

  const biayaRegs = [
    "Biaya Registrasi : Rp. 500.000",
    "Biaya Pelatihan : Rp. 11.500.000",
  ];
  const biayaAks = [
    "Biaya Registrasi : Rp. 500.000",
    "Biaya Pelatihan : Rp. 15.500.000",
  ];
  return (
    <div className="bg-gradient-to-t from-primary to-sky-500 p-5">
      <div className=" container mx-auto ">
        <Title title="Program Unggulan Eli Crew" />

        <div className="lg:flex gap-5 ">
          <div className="">
            <div className="bg-amber-500 rounded-tr-3xl">
              <h1 className="bg-white rounded-bl-3xl rounded-tr-3xl px-4 py-3 text-slate-900 font-semibold text-lg uppercase md:text-3xl">
                Program Reguler Setara D1
              </h1>
            </div>
            <div className="bg-primary">
              <div className="px-4 bg-amber-500 rounded-bl-3xl py-2">
                <h1 className="mb-2 font-semibold text-lg md:text-3xl md:mb-4">
                  Persyaratan Umum
                </h1>
                {syaratRegs.map((syaratReg, index) => (
                  <ul key={index}>
                    <li className="flex gap-1 text-sm md:text-xl mb-2 font-semibold items-start">
                      {imageSvg}
                      <span className="mt-[0.2rem] md:mt-0"> {syaratReg}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="bg-amber-500">
              <div className="px-4 bg-primary rounded-bl-3xl pt-2 pb-3">
                <h1 className="mb-2 font-semibold text-white semibold text-lg md:text-3xl">
                  Lama Pendidikan (10 Bulan)
                </h1>
                <h2 className="text-justify text-white md:text-2xl">
                  {" "}
                  3 Bulan teori di kelas + 6 Bulan OJT / Magang di hotel bintang
                  4 atau 5, setelah itu 1 bulan persiapan menghadapi interview
                  dengan agen kapal pesiar
                </h2>
              </div>
            </div>
            <div className="bg-primary">
              <div className="px-4 bg-amber-500 rounded-bl-3xl py-2">
                <h1 className="mb-2 font-semibold text-xl uppercase md:text-3xl ">
                  Biaya Registrasi
                </h1>
                {biayaRegs.map((biayaReg, index) => (
                  <ul key={index}>
                    <li className="flex gap-1 text-sm mb-2 font-semibold items-center">
                      {imageSvg}
                      <span className=" text-xl"> {biayaReg}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="">
              <div className="px-4 bg-primary  text-white rounded-bl-3xl py-2">
                <h1 className="mb-2 font-semibold text-xl uppercase md:text-3xl">
                  Biaya Registrasi
                </h1>
                {BayarRegs.map((biayaReg, index) => (
                  <ul className="flex gap-2 mb-2" key={index}>
                    <li className="">{imageSvg2}</li>
                    <span className="md:text-xl"> {biayaReg}</span>
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 lg:mt-0">
            <div className="bg-amber-500 rounded-tr-3xl">
              <h1 className="bg-white rounded-bl-3xl rounded-tr-3xl px-4 py-3 text-slate-900 font-semibold text-lg uppercase md:text-3xl">
                Program Akselerasi / Percepatan
              </h1>
            </div>
            <div className="bg-primary">
              <div className="px-4 bg-amber-500 rounded-bl-3xl py-2">
                <h1 className="mb-2 font-semibold text-lg md:text-3xl md:mb-4">
                  Persyaratan Umum
                </h1>
                {syaratAks.map((syaratAk, index) => (
                  <ul key={index}>
                    <li className="flex gap-1 text-sm md:text-xl mb-2 font-semibold items-start">
                      {imageSvg}
                      <span className="mt-[0.2rem] md:mt-0"> {syaratAk}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="bg-amber-500">
              <div className="px-4 bg-primary rounded-bl-3xl pt-2 pb-3">
                <h1 className="mb-2 font-semibold text-white semibold text-lg md:text-3xl">
                  Lama Pendidikan (10 Bulan)
                </h1>
                <h2 className="text-justify text-white md:text-2xl">
                  {" "}
                  2 Bulan teori di kelas + 3 Bulan OJT / Magang di hotel bintang
                  3 atau 4, setelah itu 1 bulan persiapan menghadapi interview
                  dengan agen kapal pesiar
                </h2>
              </div>
            </div>
            <div className="bg-primary">
              <div className="px-4 bg-amber-500 rounded-bl-3xl py-2">
                <h1 className="mb-2 font-semibold text-xl uppercase md:text-3xl">
                  Biaya Registrasi
                </h1>
                {biayaAks.map((biayaAk, index) => (
                  <ul key={index}>
                    <li className="flex gap-1 text-sm mb-2 font-semibold items-center">
                      {imageSvg}
                      <span className=" text-xl"> {biayaAk}</span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="px-4 bg-primary text-white rounded-bl-3xl py-2">
              <h1 className="mb-2 font-semibold text-xl uppercase md:text-3xl">
                Biaya Registrasi
              </h1>
              {BayarAks.map((bayarAk, index) => (
                <ul className="flex gap-2 mb-2" key={index}>
                  <li className="">{imageSvg2}</li>
                  <span className="md:text-xl"> {bayarAk}</span>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
