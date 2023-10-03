import { ejemplo1, ejemplo2, ejemplo3 } from "../assets/img";

const Ejemplos = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-8">
        <h1 className="font-mea text-4xl py-3 my-10">Algunos Ejemplos</h1>
        <p className="font-montserrat text-lg py-2 mb-5">Explora la Magia</p>
        <div className="flex justify-center flex-wrap gap-10 ">     
            <a href="https://angieprog.github.io/inv_elegante/"><img src={ejemplo1} alt="foto" className="w-[300px] h-[70vh] cursor-pointer" /></a>
            <a href="https://angieprog.github.io/inv_boda_K-H/"><img src={ejemplo3} alt="foto" className="w-[300px] h-[70vh] cursor-pointer" /></a>           
        </div> 

    </section>
  )
}

export default Ejemplos