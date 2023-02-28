interface about {
  title: string;
  content: string;
}

export default function ArticleAboutMe(aboutMe: about) {
  return (
    <article className="flex flex-col gap-4 max-w-[600px] text-justify">
      <h1 className="text-4xl font-medium">{ aboutMe.title }</h1>
      <p className="opacity-80 ml-9">{ aboutMe.content }</p>
    </article>
  );
}