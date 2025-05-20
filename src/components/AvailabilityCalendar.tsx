import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Experience } from '../types/experience';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface AvailabilityCalendarProps {
  experience: Experience;
  onSlotSelect?: (start: Date, end: Date) => void;
  onEventSelect?: (event: any) => void;
  events?: any[];
  isEditable?: boolean;
}

export function AvailabilityCalendar({
  experience,
  onSlotSelect,
  onEventSelect,
  events = [],
  isEditable = false,
}: AvailabilityCalendarProps) {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    if (isEditable && onSlotSelect) {
      onSlotSelect(start, end);
    }
  };

  const handleSelectEvent = (event: any) => {
    if (onEventSelect) {
      onEventSelect(event);
    }
  };

  return (
    <div className="h-[600px] bg-white rounded-lg shadow-sm p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={isEditable}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        view={view}
        onView={setView}
        date={date}
        onNavigate={setDate}
        className="rounded-lg"
      />
    </div>
  );
}