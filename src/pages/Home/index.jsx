import Course from '../../components/Course';
import Grades from '../../components/Grades';
import Sidebar from '../../components/Sidebar';

export default function Home() {
  const date = new Date();
  const today = date.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="flex">
    <Sidebar />
    <main className="bg-primary-100 w-[400px] h-screen ml-10 rounded-[40px] mt-4 p-10">
      <h1 className="text-3xl font-semibold">Degree Activity</h1>
      <h5 className="text-primary-400 font-semibold mt-2">{today}</h5>
      <Grades />
    </main>
    </div>
  )
}
