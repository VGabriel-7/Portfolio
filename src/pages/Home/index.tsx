import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

import imageProfile from '../../images/imageProfile.jpg';
import logoLinkedin from '../../images/logoLinkedin.svg';
import logoGithub from '../../images/logoGithub.svg';

import {
  react
} from '../../images';
import AnimationIcons from '../../components/AnimationIcons';
import Profile from '../../components/Profile';

export default function Home() {
  const styledButton = `transition ease-in min-w-[180px] border-2 border-default_Purple
  border-opacity-20 rounded-md h-12 hover:border-opacity-100 active:translate-x-[2px]
  active:translate-y-[2px] active:duration-75 flex justify-center items-center`

  const nav = useNavigate();

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <section className="w-full h-full max-w-[100vw] min-h-screen bg-default_Black
    flex justify-center items-center">

      {/* Animation of  */}
      <AnimationIcons />

      <main className="flex z-10 flex-col items-center justify-start w-1/2 h-4/5
      gap-10 animate-iniciation translate-y-6 pt-7 pb-7">
        {/* Main Content */}
        <section>
          <div className="flex flex-col items-center
          justify-center gap-6">
            {/* Background for my profile image */}
            <Profile />
            {/* Title with my Name */}
            <h1 className="text-5xl text-center text-default_White">Vinícius Gabriel</h1>
          </div>
        </section>

        {/* Navigation page */}
        <nav
          className="max-w-[400px] flex text-default_White justify-center"
        >
          <div className="flex gap-7 flex-wrap justify-center
          md:justify-between">
            <button
              type="button"
              className={ styledButton }
              onClick={() => nav('/about')}
            >
              About
            </button>

            <button
              type="button"
              className={ styledButton }
              onClick={() => nav('/projects') }
            >
              Projects
            </button>

            <a
              href="https://www.linkedin.com/in/vinícius-gabriel-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className={ styledButton }
              >
                {/* Image of linkedin */}
                <img src={ logoLinkedin } alt="Logo do linkedin" />
              </button>
            </a>

            <a
              href="https://github.com/VGabriel-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className={ styledButton }
              >
                {/* Image of github */}
                <img src={ logoGithub } alt="Logo do github" />
              </button>
            </a>

            <button
              type="button"
              className="transition w-[180px] md:flex-grow ease-in border-2 border-default_Purple
              border-opacity-20 rounded-md h-12 hover:border-opacity-100 active:translate-x-[2px]
              active:translate-y-[2px] active:duration-75 flex-grow-0"
              onClick={ () => nav('/contact-me') }
            >
              Contact Me
            </button>
          </div>
        </nav>
      </main>
    </section>
  )
}