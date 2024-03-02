import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import DevImg from "../shared/DevImg";
import Socials from "../shared/Socials";
import Badge from "../shared/Badge";
import { RiBriefcase4Fill, RiTodoFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="pt-8 xl:pt-12 min-h-[90vh]">
        <div className="container mx-auto">
            <div className="flex xl:justify-between justify-center gap-x-8 flex-wrap">
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-start mb-6 xl:mb-0">
                  <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                  <h1>Hello, my name is Ahmed GHANIM</h1>
                  <p className="xl:text-lg text-base font-light xl:text-justify text-muted-foreground mb-6">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Duis neque nisi, ullamcorper 
                    a magna non, vestibulum dictum tellus. Nunc non dapibus 
                    velit, eget semper arcu. Nullam at sem vitae diam 
                    vehicula auctor.
                  </p>
                  <div className="flex gap-x-4 mb-6 justify-center xl:justify-start">
                    <Link href={'/contact'}>
                        <Button size={"lg"} className="gap-x-3">Contact me <Send size={18}/></Button>
                    </Link>
                    <Link href={'/projects'}>
                        <Button size={"lg"} variant="outline" className="gap-x-3">My projects <Download size={18}/></Button>
                    </Link>
                  </div>
                  <Socials />
                </div>
                <div className="flex items-center relative">
                    <Badge 
                        cointainerStyles="absolute top-[60px] -left-[50px]"
                        icon={<RiBriefcase4Fill />}
                        endCountNum={3}
                        badgeText="Years Of Experience"
                    />
                    <Badge 
                        cointainerStyles="absolute bottom-[80px] -right-[50px]"
                        icon={<RiTodoFill />}
                        endCountNum={15}
                        badgeText="Completed Project"
                    />
                    <DevImg />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero