import Image from 'next/image';

const AboutImage = () => {
  return (
    <>
    <Image className='dark:hidden' src='/about/about_dark.png' title='Ahmed GHANIM - Web Developer and Full Stack Engineer' height={500} width={500} alt='Ahmed GHANIM - Web Developer and Full Stack Engineer' priority/>
    <Image className='hidden dark:flex' src='/about/about_light.png' title='Ahmed GHANIM - Web Developer and Full Stack Engineer' height={500} width={500} alt='Ahmed GHANIM - Web Developer and Full Stack Engineer' priority/>
    </>
  )
}

export default AboutImage;