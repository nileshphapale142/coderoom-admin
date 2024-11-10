'use client'

export const SimpleButton = (
  { name, onClick, bgColor}: {
    name: string;
    onClick: () => void;
    bgColor: string;
}) => {
  return (
    <button className={`w-full h-10 rounded-4 px-2 py-1 ${bgColor}`} onClick={onClick}>
      <span className="flex justify-center items-center text-center">
        {name}
      </span>
    </button>
  )
}