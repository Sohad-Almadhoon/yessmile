import React, { useState } from 'react'
import TreatmentRow from './TreatmentRow'
import { v4 as uuidv4 } from 'uuid'

const Treatments = () => {
  const [rows, setRows] = useState<any[]>([
    {
      id: uuidv4(),
      inputs: ['', '', '', '', '', ''],
    },
  ])
  console.log(rows)
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: uuidv4(),
        inputs: ['', '', '', '', '', ''],
      },
    ])
  }

  const handleUpdateInput = (value: string, rowId: string, inputIndex: number) => {
    const row = rows.find(row => row.id === rowId)
    const updatedInputs = row.inputs.map((input, index) => (index === inputIndex ? value : input))
    const updatedRow = { id: row.id, inputs: updatedInputs }

    setRows(prev => prev.map(r => (r.id === rowId ? updatedRow : r)))
  }

  const handleDeleteRow = (id: string) => {
    const row = rows.findIndex(row => row.id === id)
    const updatedRows = [...rows]
    updatedRows.splice(row, 1)
    setRows(updatedRows)
  }

  const handleCopyRow = (id: string) => {
    const copiedRow = rows.find(row => row.id === id)
    const copiedRowIndex = rows.findIndex(row => row.id === id)
    console.log(rows, copiedRow, copiedRowIndex)
    const updatedRows = [...rows]
    updatedRows.splice(copiedRowIndex, 0, {
      id: uuidv4(),
      inputs: copiedRow.inputs,
    })
    console.log(updatedRows)
    setRows(updatedRows)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="w-full border border-gray-300 overflow-auto">
              {rows.map((row, i) => (
                <React.Fragment key={row.id}>
                  {
                    <TreatmentRow
                      onDelete={() => handleDeleteRow(row.id)}
                      onCopy={() => handleCopyRow(row.id)}
                      inputs={row.inputs}
                      onUpdateInput={(value, index) => handleUpdateInput(value, row.id, index)}
                      index={i}
                    />
                  }
                </React.Fragment>
              ))}
            </div>
            <button
              className="bg-primary text-white px-2 py-1 rounded-md text-sm hover:bg-white hover:text-primary shadow-md mt-4"
              onClick={handleAddRow}
            >
              Add Row
            </button>

            <div className="flex justify-end">
              <button className="bg-primaryDark text-white px-2 py-1 rounded-md text-sm hover:bg-white hover:text-primary shadow-md mt-4">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Treatments
