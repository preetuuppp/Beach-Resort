import React from "react";
import Room from "./Room";

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately not found</h3>
      </div>
    );
  }

  return (
    <>
      <section className="roomList">
        <div className="roomslist-center">
          {rooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default RoomList;
