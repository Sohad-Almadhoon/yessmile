import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Tab from "../components/ui/Tab";
import { useState } from "react";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { BiEuro } from "react-icons/bi";
import { patients } from "@/lib/data";
import MyCalendar from "../components/shared/MyCalendar";
import { useDarkMode } from "@/hooks/useMode";
const columns: GridColDef[] = [
  { field: "id", headerName: "#", width: 30 },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phoneNo",
    headerName: "Phone No.",
    type: "string",
    flex: 1,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "time",
    headerName: "Zeitpunkt der Erstellung",
    type: "string",
    flex: 1,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "sections",
    headerName: "Abschnitte",
    flex: 1,
    headerAlign: "left",
    align: "left",
    renderCell: () => {
      return (
        <div className="flex items-center gap-1">
          <IoPricetagSharp className="dark:text-white  text-primary hover:text-white hover:bg-primary dark:hover:bg-white dark:hover:text-primary border-primary border rounded-md p-1 cursor-pointer w-6 h-6" />
          <MdOutlineFlightTakeoff className="dark:text-white text-primary hover:text-white hover:bg-primary dark:hover:bg-white   dark:hover:text-primary border-primary border rounded-md p-1 cursor-pointer w-6 h-6" />
          <TbReportAnalytics className="dark:text-white  text-primary hover:text-white hover:bg-primary dark:hover:bg-white dark:hover:text-primary border-primary border rounded-md p-1 cursor-pointer w-6 h-6" />
          <BiEuro className="dark:text-white text-primary   hover:text-white hover:bg-primary dark:hover:text-primary dark:hover:bg-white border-primary border rounded-md p-1 cursor-pointer w-6 h-6" />
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Aktionen",
    flex: 1,
    headerAlign: "left",
    align: "left",
  },
];


const handleTab = () => {};
export default function Patients() {
  const [size, setSize] = useState(5);
  const { darkMode } = useDarkMode();
  return (
    <div className="container mx-auto">
      <div className="p-3 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Tab
            icon={<AiOutlinePlusCircle className="w-6 h-6" />}
            onClick={handleTab}
          />
          <Tab text="All" onClick={handleTab} />
          <Tab text="Upcoming" onClick={handleTab} />
          <Tab text="Urgent" onClick={handleTab} />
          <Tab text="Need Images" onClick={handleTab} />
          <Tab text="X-Ray" onClick={handleTab} />
          <Tab text="First analysis" onClick={handleTab} />
          <Tab text="Final analysis" onClick={handleTab} />
          <Tab text="In Hold" onClick={handleTab} />
          <Tab text="Elithair Patients" onClick={handleTab} />
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <span>G</span>
            <span>F</span>
            <span>A</span>
            <span>B</span>
            <span>D</span>

            <div className="relative">
              <MyCalendar />
            </div>
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
        className="bg-white px-2  dark:bg-darkModeSecondary"
        rows={patients}
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
