import React from "react";
import Image from "next/image";

interface StepsProps {
  stepOneActive?: boolean;
  stepTwoActive?: boolean;
  stepThreeActive?: boolean;
}

export const Steps: React.FC<StepsProps> = ({
  stepOneActive,
  stepTwoActive,
  stepThreeActive,
}: StepsProps) => {
  return (
    <div
      className={
        "flex flex-row items-center justify-around md:gap-8 gap-3 mt-10 md:px-96"
      }
    >
      <div className={"flex flex-col items-center justify-center gap-2"}>
        <div
          className={`w-6 h-6 items-center justify-center flex text-white rounded-full ${
            stepOneActive ? "bg-green_900" : "bg-gray_100"
          }`}
        >
          {stepTwoActive ? (
            <Image
              src={"/images/check.svg"}
              alt="check"
              width={16}
              height={12}
            />
          ) : (
            1
          )}
        </div>
        <p className={`${stepOneActive ? "text-green_900" : "text-gray_100"}`}>
          Identificação
        </p>
      </div>

      <div
        className={`md:w-full h-1 rounded w-6 ${
          stepTwoActive ? "bg-green_900" : "bg-gray_100"
        }`}
      />
      <div className={"flex flex-col items-center justify-center gap-2"}>
        <div
          className={`w-6 h-6 items-center justify-center flex text-white rounded-full ${
            stepTwoActive ? "bg-green_900" : "bg-gray_100"
          }`}
        >
          {stepThreeActive ? (
            <Image
              src={"/images/check.svg"}
              alt="check"
              width={16}
              height={12}
            />
          ) : (
            2
          )}
        </div>
        <p className={`${stepTwoActive ? "text-green_900" : "text-gray_100"}`}>
          Pagamento
        </p>
      </div>

      <div
        className={`md:w-full h-1 rounded w-6 ${
          stepThreeActive ? "bg-green_900" : "bg-gray_100"
        }`}
      />
      <div className={"flex flex-col items-center justify-center gap-2"}>
        <div
          className={`w-6 h-6 items-center justify-center flex text-white rounded-full ${
            stepThreeActive ? "bg-green_900" : "bg-gray_100"
          }`}
        >
          3
        </div>
        <div
          className={`${stepThreeActive ? "text-green_900" : "text-gray_100"}`}
        >
          Confirmação
        </div>
      </div>
    </div>
  );
};
