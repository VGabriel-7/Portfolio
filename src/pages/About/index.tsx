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
    text-default_White">

      <div className="flex items-center gap-20 p-10 animate-iniciation">
        <Profile />
        <div className="flex flex-col gap-1 flex-wrap">
          <h1 className="text-6xl">Vinícius Gabriel da Silva Almeida</h1>
          <h5 className="ml-14">Desenvolvedor Web <span className="text-default_Green">Front End</span></h5>
        </div>
      </div>

      <main className="flex flex-wrap w-3/4 px-20 gap-16 translate-y-4
      animate-iniciation pb-8">
        <ArticleAboutMe
          content='Nasci em Olindina, uma cidade do interior da Bahia, onde moro
          atualmente, sou adventista do sétimo dia, gosto muito de jogar
          futebol, nadar, andar de skate e amo programação.
          Com 15 anos conheci a programação atráves
          de um vídeo do Gustavo Guanabara e me apaixonei por aquilo.'
          title='Vida pessoal'
        />

        <ArticleAboutMe
          content='Faço o curso de Desenvolvimento Web na Trybe, aprendendo
          e desenvolvendo projetos front-end e back-end, utilizando tecnologias
          como por exemplo, javascript, html, css, typescript, express.js,
          sequelize, node.js, react.js, mySql, noSql, docker, git, github
          e diversas outras.
          Gosto de aprender coisas também fora da Trybe para expandir meu
          conhecimento. Rocketseat, youtube, documentações e livros são minhas
          maneiras preferidas de aprender mais.'
          title='Cursos'
        />

        <ArticleAboutMe
          content='De 2019 à 2022 fui educador na Prepara Cursos,
          auxiliando e elaborando atividades para os alunos, além de
          preparar e aplicar workshops sobre vários temas na área de
          tecnologia além de dar manutenção nos hardwares/softwares
          dos computadores/servidor da empresa.'
          title='Experiência profissional'
        />
      </main>

      <GoBackHome />
    </section>
  );
}