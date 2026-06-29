import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon
} from "@phosphor-icons/react/dist/ssr"

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className="bg-[#E84C3D] text-white py-16">
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-center font-bold text-3xl mb-8' data-aos="fade-up" data-aos-delay="100">
                        Marcas que trabalhamos
                    </h4>

                <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                    {brands.map((item, index) => (
                        <div key={index} className='bg-white rounded-lg p-4 flex items-center justify-center' data-aos="fade-up" data-aos-delay={140 + index * 70}>
                            <Image
                            src={item.logo}
                            alt={item.name}
                            height={50}
                            width={100}
                            quality={100}
                            className='object-contain'
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                            />

                        </div>
                    ))}
                </div>
            </div>

            <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                <div>
                    <h3 className='text-2xl font-semibold mb-2'>
                        Pet Shop Dev
                    </h3>
                    <p className='mb-4 text-gray-100'>
                        Cuidando do seu melhor amigo com amor e dedicação.
                    </p>
                    <a
                    href='#'
                    className='bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-500'
                    >
                        Contato via WhatsApp 
                    </a>
                </div>

                <div data-aos="fade-up" data-aos-delay="260">
                    <h3 className='text-2xl font-semibold mb-2'>
                        Contatos
                    </h3>
                    <p className='text-gray-300'>Email: email@gmail.com</p>
                    <p className='text-gray-300'>Telefone: (XX) 9872727272</p>
                    <p className='text-gray-300'>Endereço: Rua X, Número 401, centro | São Luís</p>
                
                </div>

                 <div data-aos="fade-up" data-aos-delay="340">
                    <h3 className='text-2xl font-semibold mb-2'>
                        Redes Sociais
                    </h3>
                    <div className='flex gap-2 items-center'>
                        <a
                        href='#'
                        target='_blank'
                        >
                        <FacebookLogoIcon className='h-8 w-8 cursor-pointer hover:text-gray-300 ' />
                        </a>
                        <a
                        href='#'
                        target='_blank'
                        >
                        <InstagramLogoIcon className='h-8 w-8 cursor-pointer hover:text-gray-300' />
                        </a>
                        <a
                        href='#'
                        target='_blank'
                        >
                        <TwitterLogoIcon className='h-8 w-8 cursor-pointer hover:text-gray-300' />
                        </a>
                    </div>
                    
                
                </div>

            </footer>

            </div>
        </section>
    )
}   