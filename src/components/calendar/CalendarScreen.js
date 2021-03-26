import React, { useState, useEffect } from "react";
import { Navbar } from "../ui/Navbar";
import { useSelector, useDispatch } from "react-redux";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-messages-es";

import "moment/locale/es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";
import {
  eventClearActiveEvent,
  eventSetActive,
  eventStartLoading,
} from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";
moment.locale("es");

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const dispatch = useDispatch();
  //TODO: leer del store, los eventos
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { uid } = useSelector((state) => state.auth);

  // al recargar la pagina quede en la misma pestaña (vista)
  const [lastView, setLastView] = useState(
    localStorage.getItem("lasView") || "month"
  );

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  // doble click sobre el evento
  const onDoubleClick = (e) => {
    //console.log(e);
    dispatch(uiOpenModal());
  };

  // al seleccionar el evento
  const onSelectEvent = (e) => {
    //console.log(e);
    dispatch(eventSetActive(e));
  };

  // cambio de vista - mes, dia, semana ...
  const onviewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lasView", e);
  };

  const onSelectSlot = (e) => {
    //console.log(e);
    dispatch(eventClearActiveEvent());
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    //console.log(event, start, end, isSelected);

    const style = {
      backgroundColor: uid === event.user._id ? "#367CF7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        selectable={true}
        onView={onviewChange}
        components={{
          event: CalendarEvent,
        }}
        view={lastView}
      />

      <AddNewFab />

      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};
