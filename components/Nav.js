import Image from "next/image";
import NavItem from "./NavItem";
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

function Nav({ logout, user }) {
  return (
    <nav className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <NavItem title="HOME" Icon={HomeIcon} />
        <NavItem title="SEARCH" Icon={SearchIcon} />
        <NavItem title="PROFILE" Icon={UserIcon} />
        <NavItem onClick={() => logout()} title="LOGOUT" Icon={LogoutIcon} />
      </div>
      <div>
        <h1 className="text-2xl"> {user}</h1>
        {/* <Image
          height={100}
          width={100}
          src="https://toppng.com/uploads/preview/sweet-16-11563137523lhxssglaz6.png"
        /> */}
      </div>
    </nav>
  );
}

export default Nav;
