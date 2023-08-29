import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Tab from '../components/ui/Tab'
import { useState } from 'react'
import { AiFillEye, AiOutlineStar, AiOutlineDown } from "react-icons/ai";
import MyCalendar from "../components/shared/MyCalendar";
import { useDarkMode } from '@/hooks/useMode'
import { payments } from '@/lib/data';
const columns: GridColDef[] = [
  { field: "id", headerName: "#", width: 30, headerClassName: "bold-header" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "left",
    align: "left",
    renderCell: (params) => (
      <a href={`/profile/${params.id}`} className="text-primary underline">
        {params.value}
      </a>
    ),
  },
  {
    field: "arrival",
    headerName: "Arrival",
    flex: 1,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "treatments",
    headerName: "Treatments",
    type: "string",
    flex: 1,
    headerAlign: "left",
    align: "left",
    renderCell: (params) => (
      <a href={`/treatment/${params.id}`} className="text-primary underline">
        {params.value}
      </a>
    ),
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    flex: 1,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "paid",
    headerName: "Paid(DE)",
    headerAlign: "left",
    align: "left",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    headerAlign: "left",
    align: "left",
    flex: 1,
    renderCell: () => (
      <div className="flex items-center gap-2">
        <AiOutlineStar className="bg-[#9c6028] bg-opacity-20 text-[#9c6028] rounded-md px-1 w-6 h-6" />
        <AiFillEye className="bg-[#277741] text-[#277741] bg-opacity-20 rounded-md px-1 w-6 h-6" />
        <AiOutlineDown className="bg-[#465af7] text-[#465af7] bg-opacity-20 rounded-md px-1 w-6 h-6" />
      </div>
    ),
  },
];

const handleTab = () => {}
export default function Payments() {
  const [size, setSize] = useState(5);
   const { darkMode } = useDarkMode();
  return (
    <div className="container mx-auto">
      <div className="p-3 flex justify-end items-center">
        <div className="flex gap-2 items-center">
          <Tab text="Last Month" onClick={handleTab} />
          <Tab text="This Month" onClick={handleTab} />
          <Tab text="Next Month" onClick={handleTab} />

          <div className="relative">
            <MyCalendar />
          </div>
        </div>
      </div>
      <DataGrid
        sx={{
          "& .css-t89xny-MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            color: darkMode !== "dark" ? "#000" : "#fff",
          },
          "& .MuiDataGrid-cellContent": {
            color: darkMode !== "dark" ? "#535f6b" : "#fff",
          },
          minHeight: 500,
          mb: 5,
        }}
        className="bg-white  px-2  dark:bg-darkModeSecondary"
        rows={payments}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: size,
            },
          },
        }}
        pageSizeOptions={[2, 3, 4, 5]}
        onPaginationModelChange={(e) => setSize(e.pageSize)}
      />
    </div>
  );
}
