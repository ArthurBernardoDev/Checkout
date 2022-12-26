type infoCourseProps = {
  id: string;
};

export const InfoCourse = ({ id }: infoCourseProps) => {
  return (
    <>
      <div className={"flex-col xl:p-1   mb-10"}>
        <div>
          <header className={"text-center mb-5"}>
            <img
              className={"rounded-t-lg"}
              src="https://i.ytimg.com/vi/C2HU3AY7IkU/maxresdefault.jpg"
              width={400}
              height={400}
            />
          </header>
          <div>
            <h1 className={"text-sm font-black ml-4 text-blue_900 mx-6"}>
              curso nextjs
            </h1>
            <div>
              <p className={"text-xs font-normal ml-4 mt-3  w-80 xl:w-96"}>
                descrição do curso
              </p>
            </div>
          </div>
          <div className={"pb-6"}>
            <div className={"pr-32"}>
              <p className={"font-bold text-sm text-blue_900 ml-4 mt-1"}>
                R$ 900
              </p>

              <p className={"text-xs font-semibold text-blue_900 ml-4 mt-1"}>
                ou 9x de R${String(100 / 9).substring(0, 5)}
              </p>
              <p className={"font-bold xl:text-2xl text-green_900 ml-4 mt-1"}>
                s/ juros{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
