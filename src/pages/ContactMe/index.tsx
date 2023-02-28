import { useEffect } from "react"

import GoBackHome from "../../components/GoBackHome";

import {
  whatsapp,
  gmail
}from '../../images';

export default function ContactMe() {
  useEffect(() => {
    document.title = 'Contact Me ';
  }, []);

  return (
    <section className="w-full h-full max-w-[100vw] min-h-screen bg-default_Black
    flex justify-center items-center">
      <form
        action="https://formsubmit.co/viniciusgsa99@gmail.com"
        method="post"
        className="flex flex-col min-h-1/2 w-96 p-9 gap-7 animate-iniciation"
      >
        <div className="flex justify-evenly">
          <img
            src={gmail}
            alt="Icone do Gmail"
            className="w-1/6"
          />

          <a
            href="http://wa.me/5575997145920?text=Olá,%20vim%20através%20do%20seu%20portfólio."
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/6"
          >

            <img
              src={whatsapp}
              alt="Icone do Whatsapp"
              className="w-full"
            />
          </a>
        </div>

        <input
          type="text"
          placeholder="Nome"
          className="p-1 rounded-md bg-default_White text-center"
        />

        <input
          type="text"
          placeholder="E-mail"
          className="p-1 rounded-md bg-default_White text-center"
        />

        <input
          type="text"
          placeholder="Assunto"
          className="p-1 rounded-md bg-default_White text-center"
        />

        <textarea
          rows={5}
          placeholder="Conteúdo"
          className="rounded-md bg-default_White text-center"
        />

        <button
          type="submit"
          className="border-2 border-default_Purple transition-opacity duration-300 opacity-70
          rounded-md hover:opacity-100 h-9 w-3/4 self-center font-bold text-default_White"
        >
          Enviar
        </button>
      </form>

      <GoBackHome />
    </section>
  )
}