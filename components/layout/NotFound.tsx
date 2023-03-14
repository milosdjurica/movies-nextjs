import Link from "next/link";

function NotFound() {
  return (
    <div
      className="
    flex h-screen flex-col items-center
    justify-center space-y-10 p-10 text-center 
    "
    >
      <h3>The page you are looking for is not found!</h3>
      <Link
        className="rounded-xl p-4 shadow-lg shadow-blue-900 
        duration-200 hover:scale-105"
        href="/"
      >
        Go back to home page
      </Link>
    </div>
  );
}

export default NotFound;
