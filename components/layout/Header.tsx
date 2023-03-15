import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const links = [
    {
      url: "/mylist",
      title: "My List",
    },
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/search",
      title: "Search",
    },
  ];

  const router = useRouter();

  return (
    <header className="z-[100] bg-black/60">
      <nav className="flex w-full justify-center space-x-10 md:space-x-20">
        {links.map((el) => {
          return (
            <Link
              key={el.url}
              href={el.url}
              className={
                router.pathname === el.url
                  ? ``
                  : `text-gray-400 duration-200 ease-in hover:text-white`
              }
            >
              {el.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
