import { RiCommunityFill, RiGithubFill, RiLinkedinFill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import Link from "next/link";

const contactInfos = [
    {
        name: <RiPhoneFill />,
        text: '+33 6 74 31 16 24'
    },
    {
        name: <RiMailFill />,
        text: 'ahmedghanim902@gmail.com'
    },
    {
        name: <RiCommunityFill />,
        text: 'Lyon, France'
    }
]

const Infos = () => {
  return (
    <div className="flex justify-center flex-col gap-x-4 xl:justify-start">
        {contactInfos.map((info) => {
           return  (<div key={info.text} className="text-foreground hover:text-primary transition-all flex justify-start items-center text-[18px] gap-x-2 mb-2">
           <span className="bg-primary rounded-full p-2 text-white">{info.name}</span>
           <p className="text-md">{info.text}</p>
        </div>)
        })}
    </div>
  )
}

export default Infos;