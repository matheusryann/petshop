import Image from "next/image";
import about1 from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import {  WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function About() {
  return (
    <section className="bg-[#FDF6Ec] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative" data-aos-delay="500" data-aos="fade-up-right">
          <div className="relative w-full h-[400px] rounded-lg border-white overflow-hidden">
            <Image
              src={about1}
              alt="Foto de um cachorro"
              fill
              priority
              quality={100}
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-3xl overflow-hidden border-2 border-white">
            <Image
              src={about2}
              alt="Foto de um gato"
              fill
              priority
              quality={100}
            />
          </div>
        </div>

        <div className="space-y-6 mt-14" data-aos-delay="300" data-aos="fade-up-left">
          <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="150">Sobre Nós</h2>
          <p data-aos="fade-up" data-aos-delay="250">
            Somos uma loja especializada em produtos e serviços para animais de
            estimação. Nosso objetivo é oferecer o melhor atendimento e produtos
            de qualidade para os seus pets.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="350">
              <Check className="text-red-500" />
              Aberto desde 2008
            </li>
            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="450">
              <Check className="text-red-500" />
              Equipe com mais de 10 veterinários especializados
            </li>
            <li className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="550">
              <Check className="text-red-500" />
              Qualidade é nossa prioridade. Mais de 1000 clientes satisfeitos
            </li>
          </ul>
          <div className="flex gap-2" data-aos="fade-up" data-aos-delay="650">
            <a 
          className="bg-[#E24E42] rounded-md text-white flex items-center justify-center w-fit gap-2 px-2 py-2 hover:bg-red-700 hover:scale-[1.04] transition-all duration-500"
          href="#"
          target='_blank'
          >
            <WhatsappLogo className="text-white" />
            Contato via WhatsApp
          </a>
          <a 
          className="rounded-md flex items-center justify-center w-fit gap-2 px-2 py-2 hover:text-yellow-900 hover:scale-[1.03] transition-all duration-200"
          href="#"
          >
            <MapPin className="text-black w-5 h-5" />
            Endereço da Loja
          </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
