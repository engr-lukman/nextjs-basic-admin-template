import Head from "next/head";

type props = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#317EFB" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json"></link>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Next.js basic admin template",
  keywords: "nextjs, typescript, tailwindcss",
  description: "This is a simple Next.js basic admin template.",
};

export default Meta;
