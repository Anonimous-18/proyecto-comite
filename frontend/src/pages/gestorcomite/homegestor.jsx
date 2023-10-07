import DefaultLayout from "../../Layout/DefaultLayout";
import Semaforo from "../../components/util/semaforo"
import Filtrocomite from "../../components/util/filtocomite"

export const HomeGestor = () => {
    return (
        <DefaultLayout>
            <div>
                <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-20 sm:pb-40 ">
                    <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
                        <div className=" flex space-x-2">
                            {/* flex space-x-4 para columas */}
                            <Semaforo />
                            <Filtrocomite />
                        </div>
                    </div>

                    <div className=" border-2">
                        <Carta />
                    </div>
                    
                </div>
            </div>
        </DefaultLayout>
    )
}