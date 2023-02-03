import React from 'react';

import imageProfile from '../../images/imageProfile.jpg';
import logoLinkedin from '../../images/logoLinkedin.svg';
import logoGithub from '../../images/logoGithub.svg';

export default function Home() {
  const styledButton = `transition ease-in min-w-[180px] border-2 border-default_Purple
  border-opacity-20 rounded-md h-12 hover:border-opacity-100 active:translate-x-[2px]
  active:translate-y-[2px] active:duration-75 flex justify-center items-center`

  return (
    <section className="h-screen w-screen bg-default_Black flex justify-center items-center">
      <main className="flex flex-col items-center justify-start w-1/2 h-4/5 gap-10">
        {/* Main Content */}
        <section>
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Background for my profile image */}
            <div className="flex flex-col items-center justify-center
              bg-default_Gradient
              p-[2px] rounded-full
              w-56">
              <img
                src={imageProfile}
                alt="Profile"
                className="min-w-[153px] rounded-full"
              />
            </div>
            {/* Title with my Name */}
            <h1 className="text-5xl text-default_White">Vinícius Gabriel</h1>
          </div>
        </section>

        {/* Navigation page */}
        <nav
          className="w-4/5 flex px-36 text-default_White justify-center"
        >
          <div className="flex gap-7 flex-wrap justify-between">
            <button
              type="button"
              className={ styledButton }
            >
              About
            </button>

            <button
              type="button"
              className={ styledButton }
            >
              Projects
            </button>

            <button
              type="button"
              className={ styledButton }
            >
              {/* Image of linkedin */}
              <img src={ logoLinkedin } alt="Logo do linkedin" />
            </button>

            <button
              type="button"
              className={ styledButton }
            >
              {/* Image of github */}
              <img src={ logoGithub } alt="Logo do github" />
            </button>

            <button
              type="button"
              className="transition ease-in min-w-[120px] border-2 border-default_Purple
              border-opacity-20 rounded-md h-12 hover:border-opacity-100 active:translate-x-[2px]
              active:translate-y-[2px] active:duration-75 flex-grow"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </main>
    </section>
  )
}