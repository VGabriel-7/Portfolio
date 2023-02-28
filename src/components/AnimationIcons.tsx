import {
  react,
  typescript,
  tailwind,
  sequelize,
  redux,
  node,
  mysql,
  figma,
  git,
  javascript,
  html,
  css,
  docker,
} from "../images";
import '../assets/animationIcons.css'

export default function AnimationIcons() {
  return (
    <div className="fixed w-screen h-screen z-0 px-0 py-0 m-0">
      <div>
        <img className="animated ml-[93%] mt-[5%]" src={ react } alt="Logo do React" />
        <img className="animated ml-[80%] mt-[5%]" src={ javascript } alt="Logo do javascript" />
        <img className="animated ml-[87%] mt-[5%]" src={ html } alt="Logo do html" />
        <img className="animated ml-[80%] mt-[5%]" src={ sequelize } alt="Logo do sequelize" />
        <img className="animated ml-[90%] mt-[5%]" src={ typescript } alt="Logo do typescript" />
        <img className="animated ml-[80%] mt-[5%]" src={ css } alt="Logo do css" />
        <img className="animated ml-[94%] mt-[5%]" src={ node } alt="Logo do node" />
      </div>
      <div className="mt-[-30%]">
        <img className="animated mt-[-41%] ml-[20%]" src={ git } alt="Logo do git" />
        <img className="animated mt-6 ml-[7%]" src={ figma } alt="Logo do figma" />
        <img className="animated mt-32 ml-[14%]" src={ tailwind } alt="Logo do tailwind" />
        <img className="animated mt-20 ml-[5%]" src={ redux } alt="Logo do redux" />
        <img className="animated mt-52 ml-[17%]" src={ mysql } alt="Logo do mysql" />
        <img className="animated mt-6 ml-[5%]" src={ docker } alt="Logo do mysql" />
      </div>
      <div>
        <img className="animated2 ml-[93%] mt-[5%]" src={ react } alt="Logo do React" />
        <img className="animated2 ml-[80%] mt-[5%]" src={ javascript } alt="Logo do javascript" />
        <img className="animated2 ml-[87%] mt-[5%]" src={ html } alt="Logo do html" />
        <img className="animated2 ml-[80%] mt-[5%]" src={ sequelize } alt="Logo do sequelize" />
        <img className="animated2 ml-[90%] mt-[5%]" src={ typescript } alt="Logo do typescript" />
        <img className="animated2 ml-[80%] mt-[5%]" src={ css } alt="Logo do css" />
        <img className="animated2 ml-[94%] mt-[5%]" src={ node } alt="Logo do node" />
      </div>
      <div className="mt-[-30%]">
        <img className="animated2 mt-[-41%] ml-[20%]" src={ git } alt="Logo do git" />
        <img className="animated2 mt-6 ml-[7%]" src={ figma } alt="Logo do figma" />
        <img className="animated2 mt-32 ml-[14%]" src={ tailwind } alt="Logo do tailwind" />
        <img className="animated2 mt-20 ml-[5%]" src={ redux } alt="Logo do redux" />
        <img className="animated2 mt-52 ml-[17%]" src={ mysql } alt="Logo do mysql" />
        <img className="animated2 mt-6 ml-[5%]" src={ docker } alt="Logo do mysql" />
      </div>
    </div>
  );
}