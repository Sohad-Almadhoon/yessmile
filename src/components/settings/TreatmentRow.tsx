import { BiSolidCopy } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
interface TreatmentRowProps {
  onDelete: () => void
  onCopy: () => void
  inputs: string[]
  index: number
  onUpdateInput: (value: string, index: number) => void
}
const TreatmentRow: React.FC<TreatmentRowProps> = ({
  onDelete,
  onCopy,
  inputs,
  onUpdateInput,
  index,
}) => {
  return (
    <div className="flex overflow-hidden w-full">
      <p className="text-gray-400 bg-gray-100 p-2 flex justify-center items-center">{index + 1}</p>
      <div className="flex-1 p-2 overflow-x-auto">
        <div className="flex">
          <div className="p-2 border border-gray-300 flex-1">
            <p className="min-w-[150px]">EN</p>
          </div>
          <div className="p-2 border border-gray-300 flex-1">
            <p className="min-w-[150px]">DE</p>
          </div>
          <div className="p-2 border border-gray-300 flex-1">
            <p className="min-w-[150px]">TR</p>
          </div>
          <div className="p-2 border border-gray-300 flex-1">
            <p className="min-w-[150px]">AR</p>
          </div>
          <div className="p-2 border border-gray-300 flex-1">
            <p className="min-w-[150px]">Shortcut</p>
          </div>
          <div className="p-2 border border-gray-300 flex-1">
            <p className="min-w-[150px]">Price</p>
          </div>
        </div>
        <div className="flex">
          {inputs.map((input, index) => (
            <div className="flex-1 p-2 border border-gray-300">
              <input
                value={input}
                onChange={e => onUpdateInput(e.target.value, index)}
                type="text"
                className="rounded-md w-full ring-gray-200 focus:ring-primary ring-1 outline-none min-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-around items-center p-2 text-gray-400 bg-gray-100">
        <button className="text-white bg-primary p-1 rounded-xl text-sm" onClick={onCopy}>
          <BiSolidCopy />
        </button>
        <button
          className="bg-red-500 text-whit p-1 rounded-xl text-sm text-white"
          onClick={onDelete}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  )
}

export default TreatmentRow
