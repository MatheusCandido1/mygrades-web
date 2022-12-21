import Progress from "../Progress";
import { getTermColor } from "../../utils/utils";

export default function GradeItem({ grade }) {
  const { course } = grade;
  const { results } = grade;
  const { term } = grade;
  const color = getTermColor(term.name);

  return (
    <div className={`${color} w-ful rounded-xl shadow p-4`}>
      <div className="w-full flex items-center justify-between">
        <h3 className="text-white font-semibold w-5/6">{course.fullname}</h3>
        <div className="bg-white px-2 py-1 rounded-lg w-fit">
          <span className="text-black font-semibold">{results.grade}</span>
        </div>
      </div>
      <footer className="mt-2 flex justify-between items-center">
        <div className="w-3/4">
          <Progress value={results.points} />
        </div>
        <div className="1/4">
          <span className="text-white text-sm font-semibold">{results.points}/100</span>
        </div>
      </footer>
    </div>
  );
}
