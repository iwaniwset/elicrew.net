import React from "react";
import Image from "next/image";
import Title from "../components/Title";
import Link from "next/link";

const imgsFooter = [
  {
    image: "/img/imgFooter/facebook.png",
    link: "https://www.facebook.com/profile.php?id=100010255743734",
  },
  {
    image: "/img/imgFooter/tiktok.png",
    link: "https://www.tiktok.com/@elienglishcilacap?_t=8cKhLDidQaw&_r=1",
  },
  {
    image: "/img/imgFooter/instagram.png",
    link: "https://instagram.com/elicrew.cilacap?igshid=MzRlODBiNWFlZA==",
  },
  {
    image: "/img/imgFooter/wa.png",
    link: "https://wa.link/25ms0g",
  },
];

export default function Footer() {
  return (
    <div className="bg-gradient-to-t  from-primary to-sky-500">
      <div className="w-full p-5 container  ">
        <div className="container sm:flex justify-between items-center sm:py-5 ">
          <div className=" mb-3 sm:mb-0">
            <h1 className="text-2xl text-center text-textSecondary sm:font-bold uppercase">
              Eli Crew Cilacap
            </h1>
          </div>
          <div className="flex justify-center my-5 gap-5 sm:my-0">
            {imgsFooter.map((img, index) => (
              <div key={index} className="">
                <Link href={img.link}>
                  <Image
                    src={img.image}
                    width={500}
                    height={500}
                    quality={100}
                    alt="img"
                    className="w-7 drop-shadow-xl    mx-auto object-cover bg-center"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <hr className="mb-3 h-5 w-full mx-auto" />
        <h4 className="flex justify-center text-textSecondary mx-auto">
          ©Copyright 2023. Made by Eli Crew
        </h4>
      </div>
    </div>
  );
}
