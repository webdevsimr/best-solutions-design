import React from "react";
import Slider from "react-slick";
import TeamCarousel from "./teamCarousel";
import team1 from "@/assets/images/homepage/slider/team1.png"
import team2 from "@/assets/images/homepage/slider/team2.png"
import team3 from "@/assets/images/homepage/slider/team3.png"


const carouselData = [
  {
    id: "cd1",
    imgName: team1,
    heading:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui  blanditiis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    id: "cd2",
    imgName: team2,
    heading:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui  blanditiis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    id: "cd3",
    imgName: team3,
    heading:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui  blanditiis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    id: "cd4",
    imgName: team3,
    heading:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui  blanditiis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },

];

const TeamSliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default setting for large screens
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1920, // Ultra-wide screens or large desktop screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440, // Very large desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280, // Larger desktops or laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Large devices (desktops, larger tablets)
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 768, // Medium devices (tablets)
        settings: {
          slidesToShow: 2.4,
        },
      },
      {
        breakpoint: 480, // Small devices (phones in landscape mode)
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 320, // Extra small devices (phones in portrait mode)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="TeamSliderSection">
      <div className="outerSpace">
        <div className="container">
          <div className="TeamSliderSection_textContent">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo
            </p>
          </div>

          <div className="hero">
            <Slider {...settings}>
              {carouselData?.map(({ description, heading, id, imgName }) => (
                <div key={id} className=" TeamSliderSection_carousel ">
                  <TeamCarousel
                    key={id}
                    description={description}
                    heading={heading}
                    imgName={imgName}
                  />
                </div>
              ))}

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSliderSection;
