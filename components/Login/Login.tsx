
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Login: React.FC = () => {
  return (
    <div className={"flex-col xl:p-1 xl:px-12 px-16 mb-10"}>
      <header className={"text-center pt-6"}></header>
      <div>
        <div>
          <h1
            className={
              "xl:text-sm text-xs font-bold my-4 text-center text-gray_300"
            }
          >
            Entre com sua conta:
          </h1>
        </div>
      </div>
      <form>
        <div className={"flex flex-col gap-1"}>
          <input
            className="xl:p-5 relative p-3 border-solid border rounded-md border-gray_50 w-full focus:border-blue_500"
            name={"email"}
            type={"email"}
            placeholder={"Email"}
          />

          <div className={"w-full relative flex items-center justify-center"}>
            <input
              className="xl:p-5 relative p-3 border-solid border rounded-md border-gray_50 w-full focus:border-blue_500"
              name={"password"}
              type={"password"}
              placeholder={"Senha"}
            />
            <span
              className={
                "cursor-pointer flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2"
              }
            >
              <Image
                src={"/images/eye.svg"}
                alt={"Cadeado"}
                width={24}
                height={24}
              />
            </span>
          </div>
        </div>

        <p className={"mt-2 text-blue_500 text-sm"}>
          <Link href={""}>Esqueci minha senha</Link>
        </p>

        <button
          data-testid={"login-submit"}
          type={"submit"}
          className={
            "bg-blue_500 xl:py-5 py-3 xl:px-16 px-20 rounded-lg text-sm font-bold text-center text-white w-full mb-6 mt-3 hover:opacity-90"
          }
        >
          Continuar
        </button>
      </form>
    </div>
  );
};
