export default function Progress({ value }) {
  return (
    <div className="w-full h-2 rounded border shadow border-gray-200">
      <div
        className="h-full bg-white rounded"
        style={{
          width: `${value}%`,
          transition: '1s ease',
          transitionDelay: '0.5s'
         }}
        >
      </div>
    </div>
  )
}
