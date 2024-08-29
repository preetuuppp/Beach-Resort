import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  console.log("price", context);
  //get unique types
  let types = getUnique(rooms, "type");

  //add all
  types = ["all", ...types];

  //map to js

  types = types.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  return (
    <>
      <section className="filter-container">
        <Title title="Search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
        </form>
      </section>
    </>
  );
};

export default RoomFilter;
