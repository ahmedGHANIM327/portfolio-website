import AboutImage from "../shared/AboutImage";
import DevImg from "../shared/DevImg";
import Infos from "../shared/Infos";

const About = () => {
  return (
    <section className="pt-8 xl:pt-16">
        <div className="container mx-auto">
            <h1 className="text-center">About</h1>
            <div className="flex xl:justify-between justify-center gap-x-8 flex-wrap">  
                <div className="xl:flex hidden items-center relative">
                  <AboutImage />
                </div>
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-start mb-6 xl:mb-0">
                  <div className="text-md uppercase font-semibold mb-4 text-primary tracking-[4px]">Hello</div>
                  <p className="xl:text-lg text-base font-light text-justify text-muted-foreground mb-6">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Duis neque nisi, ullamcorper 
                    a magna non, vestibulum dictum tellus. Nunc non dapibus 
                    velit, eget semper arcu. Nullam at sem vitae diam 
                    vehicula auctor.Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Duis neque nisi, ullamcorper 
                    a magna non, vestibulum dictum tellus. Nunc non dapibus 
                    velit, eget semper arcu. Nullam at sem vitae diam 
                    vehicula auctor.
                  </p>
                  <Infos />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About