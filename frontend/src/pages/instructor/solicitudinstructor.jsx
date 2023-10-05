import DefaultLayout from "../../Layout/DefaultLayout";
import { SolicitudComite } from "../../components/util/SolicitudComite";

export const SolicitudIntructor = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-20 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
          <SolicitudComite />
        </div>
      </div>
    </DefaultLayout>
  );
};
