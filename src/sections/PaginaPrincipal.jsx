import { foto, foto10,foto5,foto7,video, carousel } from "../assets/img";

const PaginaPrincipal = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-8">
        <h1 className="font-mea text-4xl py-3 my-10">PaginaPrincipal</h1>
        <p className="font-montserrat text-lg py-2">Elige tu diseño favorito para la página principal</p>
        <div className="flex flex-col items-center">
        <h2 className="font-sofia text-4xl py-5">Foto</h2>
            <div className="flex justify-center flex-wrap gap-10 ">     
                    <img src={foto} alt="foto" className="w-[300px] h-[80vh]" />
                    <img src={foto5} alt="foto" className="w-[300px] h-[80vh]" />
                    <img src={foto7} alt="foto" className="w-[300px] h-[80vh]" />
                    <img src={foto10} alt="foto" className="w-[300px] h-[80vh]" />
            </div>           
        </div>
        <div className="flex gap-[100px] mt-[130px] flex-wrap justify-center">
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl">Video</h2>
                <div className="flex">           
                    <video src={video} alt="video" className="w-[250px] h-[90vh]" controls/>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-sofia text-4xl">Carousel</h2>
                    <div className="flex justify-center items-center">           
                        <video src={carousel} className="w-[250px] h-[90vh]" controls/>
                    </div>
            </div>
        </div>  
    </section>
  )
}

export default PaginaPrincipal