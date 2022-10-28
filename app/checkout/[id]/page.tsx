import { InfoCourse } from "../../../components/InfoCourse/InfoCourse";
import { Login } from "../../../components/Login/Login";
import { Steps } from "../../../components/Steps/Steps";

type HomeProps = {
params: {
  id: string
}
}


export default async function Home({ params: { id } }: HomeProps) {
    return (
    <div>
      <Steps stepOneActive />
      <div
        className={
          "m-16 flex flex-col  lg:flex-row items-center justify-center gap-5"
        }
      >
        <div className={"max-w-screen-sm rounded-2xl mb-7 shadow-lg xl:mr-4"}>
          <Login />
        </div>
        <div className={"max-w-screen-sm rounded-2xl mb-7 shadow-lg"}>
          <InfoCourse id={id} />
        </div>
      </div>
    </div>
  );
}
