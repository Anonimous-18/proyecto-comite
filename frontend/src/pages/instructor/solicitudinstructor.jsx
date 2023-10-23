import DefaultLayout from "../../Layout/DefaultLayout";
import { SolicitudComite } from "../../components/util/SolicitudComite";

export const SolicitudIntructor = () => {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <SolicitudComite />
      </div>
    </DefaultLayout>
  );
};
