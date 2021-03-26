import React from "react";

export const CalendarEvent = (event) => {
  //console.log(event);
  const { title, user } = event.event;
  return (
    <div>
      <strong>{title}</strong>
      <span>- {user.name}</span>
    </div>
  );
};
