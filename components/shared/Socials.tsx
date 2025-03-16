import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";
import Link from "next/link";

const socialIcons = [
    {
        path: 'https://github.com/ahmedGHANIM327',
        name: <RiGithubFill />
    },
    {
        path: 'https://www.linkedin.com/in/ahmed-ghanim-11b4a31a5/',
        name: <RiLinkedinFill />
    },
    {
        path: 'mailto:ahmedghanim902@gmail.com',
        name: <RiMailFill />
    }
]

const Socials = () => {
  return (
    <div className="flex justify-center gap-x-4 xl:justify-start">
        {socialIcons.map((social) => {
           return  <Link key={social.path} href={social.path}>
                <div className="text-foreground text-[30px] hover:text-primary transition-all">
                    {social.name}
                </div>
            </Link>
        })}
    </div>
  )
}

export default Socials;