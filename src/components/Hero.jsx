import img_mob from '../images/image-hero-mobile.png'
import img_des from '../images/image-hero-desktop.png'
import img1 from '../images/client-audiophile.svg'
import img2 from '../images/client-maker.svg'
import img3 from '../images/client-meet.svg'
import img4 from '../images/client-databiz.svg'
const Hero = () => {
    return (
        <section className='w-full md:w-11/12 md:mx-auto flex flex-col md:flex-row-reverse md:items-center md:justify-between md:px-20 md:py-10'>
            <picture>
                <source media="(min-width:665px)" srcSet={img_des} width={400} />
                <img src={img_mob} alt="Flowers" />
            </picture>
            <div className='w-full md:w-3/5 flex items-center justify-center gap-3 mt-5 flex-col md:justify-start md:items-start'>
                <h1 className='font-bold text-5xl py-4 md:text-8xl'>Make <br className='hidden md:block'/>remote work</h1>
                <p className='font-bold text-lg text-gray-400 px-9 sm:px-16 md:p-0 text-center md:text-left py-2 md:w-[400px] my-4'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className='px-6 py-2 bg-black text-white font-bold rounded-lg md:mb-8 hover:text-black hover:bg-white border border-black'>Learn more</button>
                <div className='w-full flex justify-between items-center px-2 py-3 md:w-[550px]'>
                    <img src={img1} alt="company" />
                    <img src={img2} alt="company" />
                    <img src={img3} alt="company" />
                    <img src={img4} alt="company" />
                </div>
            </div>
        </section>
    )
}

export default Hero