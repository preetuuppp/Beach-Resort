import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../context";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <h3>Loading..</h3>;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomList from "./RoomList";
// import RoomFilter from "./RoomFilter";
// import { RoomConsumer } from "../context";

// const RoomContainer = () => {
//   return (
//     <>
//       <RoomConsumer>
//         {(value) => {
//           const { loading, sortedRooms, rooms } = value;

//           if (loading) {
//             return <h3>Loading..</h3>;
//           }
//           return (
//             <div>
//               hello from rooms container
//               <RoomFilter rooms={rooms} />
//               <RoomList rooms={sortedRooms} />
//             </div>
//           );
//         }}
//       </RoomConsumer>
//     </>
//   );
// };

// export default RoomContainer;
