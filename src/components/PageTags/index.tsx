import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const PageTags = ({ title, description, image }: Props) => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_CANONICAL_URL;

  const pageTagsProps = {
    title: "Default title",
    description: "Default description",
  };

  return (
    <Head>
      {/* TODO - Add meta tags from metatags.io */}
      <title>{title ?? pageTagsProps.title}</title>
      <meta name="robots" content="follow, index" />
      <meta
        name="description"
        content={description ?? pageTagsProps.description}
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        name="author"
        content="Eduardo Pinheiro - https://edupinheiro.dev/"
      />
      <meta property="og:url" content={url + router.asPath} />
      <meta
        property="og:image"
        content={image ? image : url + "/android-chrome-512x512.png"}
      />
      <meta property="og:site_name" content={title} />
      <link rel="canonical" href={url + router.asPath} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default PageTags;
