import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex-col w-full bg-blue-500 flex justify-center items-center">
      <Image
        src="/img/maintenance.png"
        alt="image-test"
        width={250}
        height={250}
      />
      <h1 className="text-center font-semibold text-4xl mt-5">
        This website under maintenance
      </h1>
      <h1 className="text-6xl font-bold mt-10 mb-3">ELI CREW CILACAP</h1>
      <p className="text-3xl font-semibold text-slate-900">
        WA : +62 852-2702-1227
      </p>
    </div>
  );
}
