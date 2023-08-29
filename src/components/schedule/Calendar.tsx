import React, { useState } from "react";
import DateSelectArg from "@fullcalendar/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
}

interface EventInfo {
  event: {
    title: string;
  };
  timeText: string;
}

interface ScheduleCalendarProps {}

const ScheduleCalendar: React.FC<ScheduleCalendarProps> = () => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);


  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); 

    if (title) {
      const newEvent: Event = {
        id: String(currentEvents.length + 1),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
      calendarApi.addEvent(newEvent);
      setCurrentEvents([...currentEvents, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  const renderEventContent = (eventInfo: EventInfo) => (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );

  return (
    <div className="demo-app-main">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        // initialEvents={[]}
        eventClick={handleEventClick}
        select={handleDateSelect}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default ScheduleCalendar;
