import { g1,g2,g3,g4,g5,g6,g7,g8,g9 } from "../assets/img";

const Ejemplos = () => {
  return (
    <section className="flex flex-col items-center mb-8">
        <h1 className="font-mea text-4xl py-3 my-10">Tema: Elementos Mágicos</h1>
        <p className="font-montserrat text-lg pt-2 px-3 text-center mb-7">Elije un tema para tu invitación. Agrega Elementos mágicos.</p>
        <div className="">     
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-sofia text-4xl py-5 mb-5">Princesa</h2>
            <div className="flex justify-center flex-wrap gap-11">
              <img src={g1} alt="foto" className="w-[200px] h-[350px]" />
              <img src={g2} alt="foto" className="w-[200px] h-[350px]" />
              <img src={g3} alt="foto" className="w-[200px] h-[350px]" />
              <img src={g6} alt="foto" className="w-[200px] h-[350px]" />
            </div>
          </div>
            <div className="flex flex-col items-center mt-8">
              <h2 className="font-sofia text-4xl py-5 mb-5">Flores</h2>
              <div className="flex justify-center flex-wrap gap-11">
                <img src={g4} alt="foto" className="w-[200px] h-[350px]" />
                <img src={g5} alt="foto" className="w-[200px] h-[350px]" />
              </div>
            </div >  
            <div className="flex flex-col items-center mb-8">
              <h3 className="font-sofia text-4xl py-5 mb-5">Mariposas</h3>
                <div className="flex justify-center flex-wrap gap-11">
                  <img src={g7} alt="foto" className="w-[200px] h-[350px]" />
                  <img src={g8} alt="foto" className="w-[200px] h-[350px]" />
                  <img src={g9} alt="foto" className="w-[200px] h-[350px]" />
                </div>
            </div>          
        </div>  
    </section>
  )
}

export default Ejemplos