import { PropsWithChildren } from 'react'

interface aboutMe extends PropsWithChildren {
  title: string;
}

export default function ArticleAboutMe({ children, title }: aboutMe) {
  return (
    <article className="flex flex-col gap-4 text-justify w-full">
      <h1 className="text-2xl md:text-4xl font-medium self-center
      md:self-start">{ title }</h1>
      <p className="opacity-80">{ children }</p>
    </article>
  );
}