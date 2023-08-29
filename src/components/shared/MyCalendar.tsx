import { PiCalendarBlankBold } from 'react-icons/pi';
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

const App: React.FC = () => {
  const [value, setValue] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: DateRange) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <>
      <label htmlFor="datepicker">
        <PiCalendarBlankBold className=" dark:text-white dark:border-white w-8 h-8 text-primary focus:text-primary border-primary border p-1 rounded-lg cursor-pointer hover:bg-primary hover:text-white" />
        <Datepicker
          inputId="datepicker"
          inputClassName="w-0 h-0"
          toggleClassName="hidden"
          value={value}
          onChange={handleValueChange}
          showShortcuts={true}
          containerClassName="w-0 h-0"
        />
      </label>
    </>
  );
};

export default App;
