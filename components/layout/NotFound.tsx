import Link from "next/link";

function NotFound() {
  return (
    <div
      className="
    flex h-screen flex-col items-center justify-center
    space-y-10 p-10 text-center font-bold 
    "
    >
      <h3 className="text-lg">The page you are looking for is not found!</h3>
      <Link
        className="rounded bg-gray-400 p-4
        duration-200 hover:scale-105"
        href="/"
      >
        Go back to home page
      </Link>
    </div>
  );
}

export default NotFound;
