import Target from '../../assets/images/target.svg';

export default function Stats() {
  return (
    <div className="flex items-center w-full gap-4">
      <div className="w-fit p-2 bg-gray-100 flex rounded-lg items-center justify-center">
        <img className="w-14 h-14" src={Target} alt="target" />
      </div>
      <div className="w-3/6 p-2 bg-gray-100 rounded-lg">
        <h3>Accumulated GPA </h3>
        <p>Lorem ipsum </p>
      </div>
      <div className="w-2/6">
        Result
      </div>
    </div>
  )
}
