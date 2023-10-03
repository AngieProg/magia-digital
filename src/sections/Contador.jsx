import { contador, contadorElegante, contadorSweet } from "../assets/img";


const Contador = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <h1 className="font-mea text-4xl py-3 mt-10 mb-6">Contador</h1>
        <p className="font-montserrat text-lg py-2">Elige tu diseño favorito para el contador de días</p>
        <div className="flex flex-wrap items-center justify-center gap-20 ">
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Sweet</h2>
                <div className="flex justify-center items-center">           
                <img src={contador} alt="foto" className="w-[250px] h-[80vh]" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Elegante</h2>
                <div className="flex justify-center items-center">           
                <img src={contadorElegante} alt="foto" className="w-[250px] h-[80vh]" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl py-5">Romantico</h2>
                <div className="flex justify-center items-center">           
                <img src={contadorSweet} alt="foto" className="w-[250px] h-[80vh]" />
                </div>
            </div>
        </div>
                
    </section>
  )
}

export default Contador