import Link from "next/link"
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa"


const socialss = [
    {icon: <FaGithub/>, path: "https://github.com/MdSajidAli18"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/md-sajid-ali-3284932b9/"},
    {icon: <FaYoutube/>, path: ""},
    {icon: <FaTwitter/>, path: ""}
]


const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
        {socialss.map((item, index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
        </div>
    )
}

export default Socials


// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

// const socialss = [
//   { icon: <FaGithub />, path: "https://github.com/yourusername" },
//   { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/yourusername" },
//   { icon: <FaYoutube />, path: "https://www.youtube.com/channel/yourchannel" },
//   { icon: <FaTwitter />, path: "https://twitter.com/yourusername" }
// ];

// const Socials = ({ containerStyles, iconStyles }) => {
//   return (
//     <div className={containerStyles}>
//       {socialss.map((item, index) => (
//         <Link key={index} href={item.path} passHref>
//           <a className={iconStyles} target="_blank" rel="noopener noreferrer">
//             {item.icon}
//           </a>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Socials;

