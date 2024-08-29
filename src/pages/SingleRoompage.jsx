// import React, { useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
// import { RoomContext } from "../context";
// import defaultBcg from "../assets/images/room-1.jpeg";

// import Hero from "../components/Hero";
// import Banner from "../components/Banner";

// const SingleRoomPage = () => {
//   const { slug } = useParams(); // Access the route parameter
//   const navigate = useNavigate(); // Use navigate for programmatic navigation
//   const context = useContext(RoomContext);

//   useEffect(() => {
//     console.log(slug);
//     // Fetch room data or perform other actions using the slug
//     if (!slug) {
//       // Navigate back if slug is not found (optional)
//       navigate("/");
//     }
//   }, [slug, navigate]);

//   return <div>Single page for {slug}</div>;
// };

// export default SingleRoomPage;

import React from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import { Component } from "react";
import { RoomContext } from "../context";
import defaultBcg from "../assets/images/room-1.jpeg";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const withRouter = (Component) => {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <Component
        {...props}
        params={params}
        navigate={navigate}
        location={location}
      />
    );
  };
};

class SingleRoomPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props); // This will now include router props

    this.state = {
      slug: this.props.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  // componentDidMount() {
  //   const { slug } = this.props.params; // Access route params like this
  //   // console.log(slug);
  // }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    console.log("images", images);

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((e, index) => (
              <img key={index} src={e} alt={name} />
            ))}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article>
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: ${size} SQFT</h6>
              <h6>
                Max Capacity :
                {capacity > 1 ? `${capacity} People` : `${capacity} Person`}
              </h6>
              <h5>{pets ? "Pets allowed " : "No pets Allowed"}</h5>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="">
            {" "}
            {extras.map((item, index) => (
              <li key={index}>-{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default withRouter(SingleRoomPage); // Wrap with withRouter
