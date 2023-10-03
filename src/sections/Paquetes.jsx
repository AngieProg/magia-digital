import { precioDiamante, precioGolden } from "../assets/img"

const Paquetes = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-8">
        <h1 className="font-mea text-4xl py-3 my-10">Paquetes</h1>
        <p className="font-montserrat text-lg py-2 mb-5 px-5 text-center">Elije el paquete que mejor se acomode a tus necesidades.</p>

        <div className="flex justify-center flex-wrap gap-11">
            <div className="bg-black text-white flex flex-col items-center px-8 py-8 mb-5 xl:w-[500px] w-[400px] shadow-3xl">
                <h2 className="font-sofia text-4xl">Gold</h2>
                <img src={precioGolden} alt="" className="w-[100px] h-[80px]"/>
                <ul className="list-image-gold list-inside text-center font-montserrat text-xl leading-10">
                    <li>Abertura de invitación con sobre</li>
                    <li>Personalización: Colores, Tipografías, Secciones, Fondos</li>
                    <li>Música Personalizada</li>
                    <li>Contador</li>
                    <li>Invitación general</li>
                    <li>Sección Padres y Padrinos</li>
                    <li>Sección Código de Vestimenta</li>
                    <li>Seccin Ubicación con GPS</li>
                    <li>Sección Galeria de Fotos</li>
                    <li>Sección Mesa de Regalos, lluvia de sobres y/o datos bancarios.</li>
                    <li>Sección Hospedaje</li>
                    <li>Sección Confirmación de asistencia por Whatsapp, e-mail o llamada.</li>
                    <li>Links Para redes Sociales</li>
                    <li>Programa</li>
                </ul>
            </div>

            <div className="bg-black text-white flex flex-col justify-center items-center px-8 py-8 mb-5 xl:w-[500px] w-[400px] shadow-3xl">
                <h2 className="font-sofia text-4xl mb-3">Diamante</h2>
                <img src={precioDiamante} alt="" className="w-[100px] h-[80px]"/>
                <ul className="list-image-diamante list-inside font-montserrat text-center text-xl leading-10">
                    <li>Todo lo que incluye la invitación Gold</li>
                    <li>1 invitación para cada uno de tus invitados con su nombre, número de asiento y número de mesa.</li>
                    <li>Tarjeta Save the Date (imagen)</li>
                    <li>QR a cada invitación</li>
                    <li>Invitación en formato para invitación</li>
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Paquetes