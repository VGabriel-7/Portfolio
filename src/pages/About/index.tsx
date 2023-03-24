import React, { useEffect } from "react";

import ArticleAboutMe from "../../components/ArticleAboutMe";
import GoBackHome from "../../components/GoBackHome";
import Profile from "../../components/Profile";

export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <section className="w-full h-full max-w-[100vw] min-h-screen bg-default_Black
    text-default_White flex items-center justify-center
    flex-col">

      <div className="flex flex-col items-center gap-10 md:gap-20 p-10 animate-iniciation min-w-1/2">
        <Profile />
        <div className="flex flex-col gap-1 flex-wrap">
          <h1 className="transition text-3xl md:text-6xl text-center">Vinícius Gabriel da Silva Almeida</h1>
          <h5 className="text-center md:text-xl text-sm">Desenvolvedor Web <span className="text-default_Green">Full Stack</span></h5>
        </div>
      </div>

      <main className="flex flex-wrap px-5 md:px-20 gap-16 translate-y-4
      animate-iniciation pb-12 justify-center items-center w-[100%] md:w-4/5">
        <ArticleAboutMe
          title='Vida pessoal'
        >
          Nasci em Olindina, uma cidade do interior da Bahia, onde moro
          atualmente, sou adventista do sétimo dia, gosto muito de jogar
          futebol, nadar, andar de skate e amo programação.
          Com 15 anos conheci a programação atráves
          de um vídeo do Gustavo Guanabara e me apaixonei por aquilo.
        </ArticleAboutMe>

        <ArticleAboutMe
          title='Cursos'
        >
          Faço o curso de Desenvolvimento Web na 
          <a
            href="https://www.betrybe.com/"
            target="_blank"
            className="text-default_Green hover:underline"
          > Trybe</a>, aprendendo
          e desenvolvendo projetos front-end e back-end, utilizando tecnologias
          como por exemplo, javascript, html, css, typescript, express.js,
          sequelize, node.js, python, react.js, mySql, noSql, docker, git, github
          e diversas outras.
          Gosto de aprender coisas também fora da Trybe para expandir meu
          conhecimento. Rocketseat, youtube, documentações e livros são minhas
          maneiras preferidas de aprender mais.
        </ArticleAboutMe>

        <ArticleAboutMe
          title='Experiência profissional'
        >
          De 2019 à 2022 fui educador na escola de cursos profissionalizantes
          <a
            href="https://www.prepara.com.br/metodologia"
            target="_blank"
            className="text-red-600 hover:underline"
          > Prepara Cursos</a>,
          auxiliando e elaborando atividades para os alunos, além de
          preparar e aplicar workshops sobre vários temas na área de
          tecnologia além de dar manutenção nos hardwares/softwares
          dos computadores/servidor da empresa.
        </ArticleAboutMe>
      </main>

      <GoBackHome />
    </section>
  );
}