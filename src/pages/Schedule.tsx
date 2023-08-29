import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Tab from "../components/ui/Tab";
import { useState } from "react";
import Papa from "papaparse";
import MyCalendar from "../components/shared/MyCalendar";
import { PiCalendarBlankBold } from "react-icons/pi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDarkMode } from "@/hooks/useMode";
import ScheduleCalendar from "@/components/schedule/Calendar";
import { schedule } from "@/lib/data";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "#",
    width: 30,
    headerClassName: "bold-header",
  },
  {
    field: "name",
    headerName: "Name",
    editable: true,
    headerClassName: "bold-header",
  },
  {
    field: "arrivalDate",
    headerName: "Arrival date",
    flex: 1,
    editable: true,
    headerClassName: "bold-header",
  },
  {
    field: "airpot",
    headerName: "Airpot",
    type: "number",
    flex: 1,
    editable: true,
    headerClassName: "bold-header",
  },
  {
    field: "flightNo",
    headerName: "Flight No.",
    type: "number",
    flex: 1,
    editable: true,
    headerClassName: "bold-header",
  },
  {
    field: "departureDate",
    headerName: "Departure Date",
    sortable: false,
    flex: 1,
    headerClassName: "bold-header",
  },
  {
    field: "airpot",
    headerName: "Airpot",
    type: "number",
    flex: 1,
    editable: true,
    headerClassName: "bold-header",
  },
  {
    field: "flightNo",
    headerName: "Flight No.",
    type: "number",
    flex: 1,
    editable: true,
    headerClassName: "bold-header",
  },
  {
    field: "hotelName",
    headerName: "Hotel Name",
    type: "number",
    flex: 1,
    editable: true,
    headerClassName: "bold-header",
  },
];

const handleDownloadCsv = () => {
  const csv = Papa.unparse(schedule);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "schedule.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleTab = () => {};
export default function Schedule() {
  const [size, setSize] = useState(5);
  const [showTable, setShowTable] = useState(true);
  const { darkMode } = useDarkMode();
  return (
    <div className="container mx-auto">
      <div className="p-3 flex justify-between items-center">
        <button onClick={handleDownloadCsv}>
          <img
            src="https://elithairekip.com/assets/images/excel.svg"
            width={40}
            height={40}
          />
        </button>
        <div className="flex gap-2 items-center relative">
          <Tab text="Today" onClick={handleTab} />
          <Tab text="This Week" onClick={handleTab} />
          <Tab text="Current Month" onClick={handleTab} />
          <Tab text="Next Month" onClick={handleTab} />
          <div className="relative">
            <MyCalendar />
          </div>
          <AiOutlineUnorderedList
            onClick={() => setShowTable(true)}
            className="dark:text-white focus:text-primary text-primary w-8 h-8 border-primary border p-1 rounded-lg cursor-pointer hover:bg-primary hover:text-white"
          />
          <PiCalendarBlankBold
            onClick={() => setShowTable(false)}
            className="dark:text-white focus:text-primary text-primary w-8 h-8 border-primary border p-1 rounded-lg cursor-pointer hover:bg-primary hover:text-white"
          />
        </div>
      </div>
      {showTable ? (
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
          rows={schedule}
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
      ) : (
        <div className="min-h-[500px] text-white mb-12">
          <ScheduleCalendar />
        </div>
      )}
    </div>
  );
}
