import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
import Room from "../components/Room";

export default class FeatcheredRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    console.log(rooms);
    return (
      <section className="featured-rooms">
        <Title title="featured-rooms" />

        <div className="featured-rooms-center">{rooms}</div>
      </section>
    );
  }
}
