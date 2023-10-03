import { sobre1, sobre2, sobre3, sobre4, sobre5, sobre6 } from "../assets/img";

const Sobre = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <h1 className="font-mea text-4xl py-3 mt-10 mb-6 ">Sobre</h1>
        <p className="font-montserrat text-lg py-4">Elige tu sobre favorito</p>
        <div className="flex flex-wrap items-center justify-center gap-20 ">
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Sobre Reyna</h2>
                <div className="flex justify-center items-center">           
                <img src={sobre1} alt="foto" className="w-[250px] h-[200px]" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Sobre Imperial</h2>
                <div className="flex justify-center items-center">           
                <img src={sobre2} alt="foto" className="w-[250px] h-[200px]" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Sobre Agua</h2>
                <div className="flex justify-center items-center">           
                <img src={sobre3} alt="foto" className="w-[250px] h-[200px]" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Sobre Princesa</h2>
                <div className="flex justify-center items-center">           
                <img src={sobre4} alt="foto" className="w-[250px] h-[200px]" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Sobre Diamante</h2>
                <div className="flex justify-center items-center">           
                <img src={sobre5} alt="foto" className="w-[250px] h-[200px]" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Sobre Jade</h2>
                <div className="flex justify-center items-center">           
                <img src={sobre6} alt="foto" className="w-[250px] h-[200px]" />
                </div>
            </div>
        </div>
                
    </section>
  )
}

export default Sobre