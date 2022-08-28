
import ContactInterface from "../Interfaces/ContactInterface";
import Facebook from "../assets/icons/facebook.svg"
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/instagram.svg";
import Linkedin from "../assets/icons/linkedin.svg"
import Github from "../assets/icons/github.svg";
import Mail from "../assets/icons/email.svg"
const Profiles:Array<ContactInterface> = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/imirfanul',
        iconUrl: Facebook
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/imirfanul',
        iconUrl:Twitter
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/imirfanul/',
        iconUrl: Instagram
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/imirfanul',
        iconUrl: Linkedin
      }
]

const Work:Array<ContactInterface> = [
    {
        name: 'GitHub',
        url: 'https://github.com/imirfanul',
        iconUrl: Github
    },
    {
        name: 'GitLab',
        url: 'https://gitlab.com/imirfanul',
        iconUrl: Github
      }
]

 const Email:ContactInterface = {
    name: 'Email',
    url: 'mailto:irfanulalamtanvir@hotmail.com',
    iconUrl: Mail
 };
  
export { Profiles, Work, Email };