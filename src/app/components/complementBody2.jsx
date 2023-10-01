import Image from "next/image";

export default function ComplementBody2(){
    return(
        <div className="flex flex-col justify-center items-center h-a">
            <h2 className="customtext2 tamaño-texto justify-center">CAMBIA LA FORMA EN LA QUE COMPARTES TU MÚSICA CON LOS TUYOS</h2>
            <p className="parrafo2 text-white">Simplifica la transferencia, reproducción y descarga de cada track, eliminando la necesidad de enviar constantemente archivos, realizando múltiples malabares con diversas plataformas, junto a la baja fidelidad y pésima optimización de la reproducción y previsualización de servicios de mensajería o nube ineficientes.</p>
            <div>
                <h3 className="text-gray-300">
                    SIMPLIFICA
                    <br />
                    COMPARTE
                    <br />
                    REPRODUCE
                </h3>
                <div>
                    <Image src={'/images/rectangle 25.png'} alt="rectangulo" width={500} height={500}/>
                    <Image src={'/images/PHONE APP.svg'} alt="celular" width={500} height={500}/>
                </div>
                <div>
                <Image src={'/images/up.svg'} alt="up"width={500} height={500}/>
                    <div>
                        <h2 className="customtext tamaño-texto">EMPIEZA A CREAR <br /> TU PORTAFOLIO</h2>
                        <p className="text-white parrafo1">SYNCK facilita a los artistas y productores la carga sencilla de sus maquetas o pistas en la plataforma, permitiendo diferentes formatos, dando la posibilidad de subir en la mejor calidad posible y de forma taggeada.</p>
                        <br />
                        <br />
                        <div>
                            <button className="confButtonAcces text-white font-bold">WAV</button>
                            <span className="font-bold text-white mx-2">&</span>
                            <button className="confButtonAcces text-white font-bold">MP3</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src={'/Images/polygon 14.svg'} alt="polygon 14" width={500} height={500}/>
                <Image src={'/Images/FORM PERSON.svg'} alt="form person" width={500} height={500} />
            </div>
        </div>
    );
}