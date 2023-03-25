import Head from "next/head"

export default function Header() {
  return (
    <Head>
      <title>TM My Site</title>
      <meta name="description" content="Projects, Travels, and Tales from Tyler Morton" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}