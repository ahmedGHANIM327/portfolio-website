import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";
import Link from "next/link";

const socialIcons = [
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
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