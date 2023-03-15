import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div
      className="mt-20 grid grid-cols-1 items-center bg-gray-700 p-2
    text-center font-semibold sm:px-4 md:grid-cols-4"
    >
      <h3 className="text-lg">
        Created by{" "}
        <a
          className="hover:text-blue-500"
          href="https://milosdjurica.vercel.app/"
        >
          Miloš Đurica
        </a>
      </h3>
      <div className=" my-4 flex justify-center space-x-5">
        <a href="https://github.com/milosdjurica">
          <BsGithub className="text-3xl hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/milosdjurica/">
          <BsLinkedin className="text-3xl hover:text-blue-500" />
        </a>
      </div>

      <p>Using TMDB API.</p>
      <p>Created for learning purposes only.</p>
    </div>
  );
}

export default Footer;
