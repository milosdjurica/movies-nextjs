import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/shows",
      title: "Tv Shows",
    },
    {
      url: "/movies",
      title: "Movies",
    },
    {
      url: "/new",
      title: "New & Popular",
    },
    {
      url: "/mylist",
      title: "My List",
    },
  ];

  const router = useRouter();


  return (
    <header className="bg-black/30">
      <nav className="space-x-5 hidden md:flex">
        {links.map((el) => {
          return (
            <Link
              key={el.url}
              href={el.url}
              className={
                router.pathname === el.url
                  ? `text-white`
                  : `text-gray-400 hover:text-white`
              }
            >
              {el.title}
            </Link>
          );
        })}
      </nav>

      <input
        type="text"
        className="text-black px-2"
        placeholder="Search by title or actor"
      />
    </header>
  );
}

export default Header;
