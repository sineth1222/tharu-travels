import Link from "next/link"
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"


const social = [
    { Icon: <FaInstagram/>, path: "https://www.instagram.com/tharu_tours_srilanka/" },
    { Icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/tharu-tours-sri-lanka-980176358/" },
    { Icon: <FaFacebook/>, path: "https://web.facebook.com/profile.php?id=61574528433221" },
    { Icon: <FaWhatsapp/>, path: "/contact" },
];

interface Pagesocials {
    containerStyles: string;
    iconStyles: string;
}

const Socials: React.FC<Pagesocials> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.Icon}
            </Link>
        );
      })}
    </div>
  )
}

export default Socials
