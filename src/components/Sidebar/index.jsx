import { RiHomeLine } from 'react-icons/ri';
import { MdClass } from 'react-icons/md';
import { BsCalendar } from 'react-icons/bs';

import Logo from '../../assets/images/logo.svg';

import { useAuth } from '../../hooks/useAuth';

export default function Sidebar() {
  const { signOut, user } = useAuth();

  function handleOnSignOut() {
    signOut();
  }

  return (
    <aside className="flex flex-col items-center w-[250px] h-screen bg-white">
      <header className="p-12 w-full flex flex-col items-center gap-2">
        <img src={Logo} alt="logo"  />
        <p className="py-0.5 px-3 rounded-lg text-white bg-red-700 font-bold w-fit">UNLV</p>
      </header>
      <ul className="w-full flex flex-col gap-8 items-center justify-center">
        <li onClick={handleOnSignOut} className="cursor-pointer w-full flex justify-center items-center h-10 ">
          <div className="flex gap-2 items-center">
            <div className="rounded-lg p-2 bg-primary-400 shadow-xl text-white">
              <RiHomeLine size={20} />
            </div>
            <p className="font-bold text-primary-400">Home</p>
          </div>
        </li>
        <li className="w-full flex justify-center items-center h-10">
          <div className="flex gap-2 items-center">
            <div className="rounded-lg p-2 text-secondary-400">
              <MdClass size={20} />
            </div>
            <p className="font-bold text-secondary-400">Courses</p>
          </div>
        </li>
        <li className="w-full flex justify-center items-center h-10">
          <div className="flex gap-2 items-center">
            <div className="rounded-lg p-2 text-secondary-400">
              <BsCalendar size={20} />
            </div>
            <p className="font-bold text-secondary-400">Terms</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}
