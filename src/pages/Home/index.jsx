import Grades from '../../components/Grades';
import Sidebar from '../../components/Sidebar';
import Stats from '../../components/Stats';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { HiOutlineBell } from 'react-icons/hi';
import { useAuth } from '../../hooks/useAuth';

export default function Home() {
  const { user, signOut } = useAuth();
  const date = new Date();
  const today = date.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" });

  function handleLogoutClick() {
    signOut();
  }

  return (
    <div className="flex">
    <Sidebar />
    <main
      className="bg-primary-100 w-[40%] ml-10 rounded-[40px] my-6 p-10"
    >
      <h1 className="text-3xl font-semibold mt-4">Degree Activity</h1>
      <h5 className="text-primary-400 font-semibold mt-2">{today}</h5>
      <section className="flex flex-col mt-8">
      <h2 className="font-semibold text-secondary-500">Courses</h2>
      <Grades />
      </section>
    </main>
    <section className="flex-1 h-screen ml-10 mt-10 p-10">
      <header className="flex justify-between items-center">
        <div className="text-gray-400 flex items-center gap-4">
          <button type="button" onClick={handleLogoutClick} className="w-10 h-10 flex justify-center items-center p-2 rounded-xl border">
            <BiLeftArrowAlt size={24} />
          </button>
          <HiOutlineBell size={24} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start">
            <h1 className="font-semibold">{user.name}</h1>
            <h5 className="text-primary-400 font-semibold capitalize text-sm">{user.role}</h5>
          </div>
          <img className="w-14 h-14" src={user.avatar} />
        </div>
      </header>
      <div className="mt-20">
        <h1 className="text-2xl text-secondary-500 font-semibold my-4">My Stats</h1>
        <div>
          <Stats />
        </div>
      </div>
    </section>
    </div>
  )
}
