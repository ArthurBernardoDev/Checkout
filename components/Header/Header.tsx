import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className={"flex items-center justify-between bg-[#1b3a4b] h-16"}>
      <div className={"py-4 px-8 xl:px-16 mt-2"}>
        <Link href={"https://folhadirigida.com.br/"}>
          <h1 className="font-bold md:text-xl text-xs text-white ">NEXTJS</h1>
        </Link>
      </div>
      <div className={"flex items-center justify-center gap-3 pr-5 xl:pr-16"}>
        <Image
          src={"/images/lock.svg"}
          alt={"Cadeado"}
          width={24}
          height={24}
        />
        <h1 className={"font-bold md:text-sm text-xs text-white"}>
          Finalize sua compra com segurança
        </h1>
      </div>
    </div>
  );
};
