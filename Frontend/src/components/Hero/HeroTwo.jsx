const HeroTwo = () => {
  return (
    <section id="about" className=' flex flex-col lg:flex-row bg-transparent justify-center items-center py-5 lg:mx-40'>
        <div className='lg:w-[70%] mb-2'>
            <h1 
            className='text-3xl font-bold leading-none text-center md:text-left text-[var(--red)] mb-5 md:text-4xl md:px-20 px-2'>
                Instagram Reels Downloader Online
            </h1>
            <p className='px-10 md:px-20 text-gray-600'>Downloading Instagram Reels has never been easier or safer with our Instagram Reels Video Downloader. We've designed our tool to help you seamlessly save Reels videos in stunning HD MP4 quality directly to your device's gallery. The best part? It's completely free and works on both Android and iPhone, so you can download Instagram Reels anytime, anywhere.</p>
        </div>
        <div>
            <img src="/img/instagram.png" alt="" className="w-[200px] lg:w-[400px]" />
        </div>
    </section>
  )
}

export default HeroTwo