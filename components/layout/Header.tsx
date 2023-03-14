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
    <header className="z-[100] bg-black/30">
      <nav className="hidden space-x-5 md:flex">
        {links.map((el) => {
          return (
            <Link
              key={el.url}
              href={el.url}
              className={
                router.pathname === el.url
                  ? `text-white`
                  : `text-gray-400 duration-200 ease-in hover:text-white`
              }
            >
              {el.title}
            </Link>
          );
        })}
      </nav>

      <input
        type="text"
        className="px-2 text-black"
        placeholder="Search by title or actor"
      />
    </header>
  );
}

export default Header;
