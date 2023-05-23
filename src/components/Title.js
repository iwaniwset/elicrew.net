import React from "react";

export default function Title(props) {
  return (
    <div>
      <h1 className="text-slate-900 text-center pt-5 pb-4   font-bold text-2xl md:text-4xl xl:text-5xl">
        {props.title}
      </h1>
      <hr className=" mx-auto  bg-slate-900 h-[0.35rem] w-20  mb-7 rounded " />
    </div>
  );
}
