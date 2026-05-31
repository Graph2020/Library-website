import { FaGitAlt } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="absolute flex w-full items-center p-3">
      <FaGitAlt className="size-16" />
      <p className="ml-2 text-xl font-bold sm:text-2xl">Tech Book Club</p>
    </nav>
  );
};

export default NavBar;
