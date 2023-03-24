import React, { useEffect } from "react";

import CardProject from "../../components/CardProject";
import GoBackHome from "../../components/GoBackHome";
import { 
  react,
  redux,
  html,
  css,
  javascript,
  RTL,
  coroa,
  cartas,
  jest,
  musica,
 } from "../../images";
import walletImg from "../../images/walletImg.svg"

export default function About() {
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  return (
    <div className="w-full h-full max-w-[100vw] min-h-screen bg-default_Black flex justify-center
    items-center-center pb-16">
      <main
        className="md:w-4/5 py-10 px-10 gap-28 flex flex-wrap justify-center items-center
        animate-iniciation translate-x-3"
      >
        <CardProject
          title='My'
          contrastTitle="Wallet"
          contrastColor="text-green-600"
          content="O projeto se trata de uma carteira de controle
          de gastos com conversor de moedas utilizando a Economia
          Awesome API."
          hardSkills={[
            react,
            redux,
            html,
            css,
            javascript,
          ]}
          linkGithub="https://github.com/VGabriel-7/My-Wallet"
          linkProject="https://my-wallet-sable.vercel.app/"
          logo={ walletImg }
        />

        <CardProject
          title='King of'
          contrastTitle="Recipes"
          contrastColor="text-orange-600"
          content="O projeto se trata de um app de receitas capaz de buscar,
          filtrar, favoritar, iniciar e acompanhar o progresso de
          receitas de comida e bebidas."
          hardSkills={[
            react,
            jest,
            html,
            css,
            javascript,
          ]}
          linkGithub="https://github.com/VGabriel-7/recipe-app"
          linkProject="https://recipe-app-rose-phi.vercel.app/"
          logo={ coroa }
        />

        <CardProject
          title=''
          contrastTitle="MusicFy"
          contrastColor="text-blue-600"
          content="O projeto se trata de uma aplicação capaz de
          reproduzir várias músicas, criar uma lista de músicas
          favoritas e editar o perfil da pessoa usuária logada."
          hardSkills={[
            react,
            html,
            css,
            javascript,
            jest,
          ]}
          linkGithub="https://github.com/VGabriel-7/Project-MusicFy"
          linkProject="https://project-music-fy.vercel.app/"
          logo={ musica }
        />

        <CardProject
          title=''
          contrastTitle="Tryunfo"
          contrastColor="text-green-600"
          content="Projeto se trata de um jogo no estilo Super Trunfo!."
          hardSkills={[
            react,
            html,
            css,
            javascript,
            jest,
          ]}
          linkGithub="https://github.com/VGabriel-7/Project-Tryunfo"
          linkProject="https://project-tryunfo-lac.vercel.app/"
          logo={ cartas }
        />
      </main>

      <GoBackHome />
    </div>
  );
}