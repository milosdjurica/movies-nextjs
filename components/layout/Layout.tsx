import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import NotFound from "./NotFound";

function Layout({ children }: any) {
  const router = useRouter();
  const is404 = router.pathname === "/_error";

  if (is404) return <NotFound />;

  return (
    <>
      <Head>
        <title>Milos Djurica | Movies</title>
        <meta
          name="description"
          content="Movies project created with TMDB API. Created by Milos Djurica for learning purposes only."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen w-full border-2 border-black">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
