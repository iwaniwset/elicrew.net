import React from "react";
import Image from "next/image";

export default function NavbarMenu() {
  return (
    <div className="w-full bg-sky-950 py-4 px-2 flex flex-col justify-end">
      <div className="flex gap-2 justify-end">
        <Image
          src={"/img/whatsapp.png"}
          width={100}
          height={100}
          quality={100}
          alt={"whatsapp"}
          className="w-6 h-auto"
        />
        <h3 className="text-slate-100 tracking-wider">+62 852-2702-1227</h3>
      </div>
    </div>
  );
}
