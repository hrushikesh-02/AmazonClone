import React, { useState } from "react";
import HomePageCard from "../../components/HomePageCard";
import Carousel from "../../components/Carousel";

const HomePage = () => {
  const [homePageCardArray, setHomePageCardArray] = useState([
    {
      title: "We have a surprise for you",
      img: "../images/home_grid_1.jpg",
      link: "See terms and conditions",
    },
    {
      title: "Watch The Rings of Power",
      img: "../images/home_grid_2.jpg",
      link: "Start streaming now",
    },
    {
      title: "Unlimited Streaming",
      img: "../images/home_grid_3.jpg",
      link: "Find out more",
    },
    {
      title: "More titles to explore",
      img: "../images/home_grid_4.jpg",
      link: "Browse Kindle Unlimited",
    },
    {
      title: "Shop Pet Supplies",
      img: "../images/home_grid_5.jpg",
      link: "See more",
    },
    {
      title: "Spring Sale",
      img: "../images/home_grid_6.jpg",
      link: "See the deals",
    },
    { title: "Echo Buds", img: "../images/home_grid_7.jpg", link: "See more" },
    {
      title: "Family Plan: 3 months free",
      img: "../images/home_grid_8.jpg",
      link: "Learn more",
    },
  ]);

  return (
    <div className="bg-amazonclone-background ">
      <div className="min-w-[1000px] max-w-[1600px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 mt-[-280px]">
          {homePageCardArray.map((item) => {
            return (
              <HomePageCard
                key={item.title}
                title={item.title}
                img={item.img}
                link={item.link}
              />
            );
          })}
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
