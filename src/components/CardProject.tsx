import { useState } from "react";

import gitHub from '../images/logoGithub.svg';
import internetIcon from '../images/internetIcon.svg';

interface InfoCard {
  hardSkills: string[];
  content: string;
  title?: string;
  contrastTitle: string;
  contrastColor: string;
  logo: string;
  linkProject: string;
  linkGithub: string;
}

export default function CardProject(infoCard: InfoCard) {
  const [animated, setAnimated] = useState<string>('none');
  return (
    <article
      onMouseEnter={ () => setAnimated('bounce')}
      onMouseLeave={ () => setAnimated('none')}
      className="w-[500px] h-[316px] border-2 flex flex-col
      border-default_Purple shadow-default_Shadow pt-7 pl-7 rounded-lg justify-between"
    >
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-default_White text-[2.50rem]">
            { infoCard.title || '' }
            {' '}
            <span className={ infoCard.contrastColor }>{ infoCard.contrastTitle }</span>
          </h1>

          <div className="flex items-center mr-10 gap-5">
            <a
              href={ infoCard.linkGithub }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ gitHub }
                alt="Ícone do Github"
                className="transition opacity-50 hover:opacity-100 w-8 duration-200"
              />
            </a>
            <a
              href={ infoCard.linkProject }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ internetIcon }
                alt="Ícone da internet"
                className="transition opacity-50 hover:opacity-100 w-9 duration-200"
              />
            </a>
          </div>
        </div>

        <p
          className="text-default_White opacity-80 w-3/5 text-justify
          ml-12 mt-3"
        >
          {infoCard.content}
        </p>
      </div>

      <div className="flex w-full justify-between mb-4">
        <div className="flex ml-7 w-3/5 gap-2">
          {
            infoCard.hardSkills.map((image, idx) => (
              <img
                key={`${image} ${idx}`}
                src={image}
                alt={`Ícone do ${image}`}
                className="w-10"
              />
            ))
          }
        </div>

        <img
          src={infoCard.logo}
          alt={`Logo do ${infoCard.contrastTitle}`}
          className={`transform mr-6 w-16 animate-${animated}`}
        />
      </div>
    </article>
  );
}