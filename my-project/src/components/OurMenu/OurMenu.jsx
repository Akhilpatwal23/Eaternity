import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/banner.png";

const MenuData = [
  {
    id: 1,
    name: "Noodle Soup",
    price: " ₹ 400",
    img: Img1,
  },
  {
    id: 2,
    name: "Noodle Soup",
    price: " ₹ 400",
    img: Img1,
  },
  {
    id: 3,
    name: "Noodle Soup",
    price: " ₹ 400",
    img: Img1,
  },
  {
    id: 4,
    name: "Noodle Soup",
    price: " ₹ 400",
    img: Img1,
  },
];
const OurMenu = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                SlidesToScroll : 1,
                initialSlide : 2,
                infinite:true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                SlidesToScroll : 1,
                initialSlide : 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                SlidesToScroll : 1,
                
            },
        }
    ]
  };
  return (
    <div className="py-16 bg-primary text-white">
      <div className="container">
        {/* {Header section} */}
        <div className="mb-10 space-y-5">
          <h1 data-aos="fade-up" className="text-center text-4xl font-blod">Our Menu</h1>
          <div data-aos="fade-up" data-aos-delay="200"
            className="text-center sm:max-w-sm mx-auto text-xs
          opacity-75"
          >
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            perferendis, nostrum itaque alias in exercitationem! Officia culpa
            incidunt consequatur, illo hic natus similique qui itaque
            voluptatibus doloribus, quam beatae ipsum.
          </div>
        </div>
        {/* {Slider section} */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {MenuData.map((menu) => (
              <div className="my-16">
                <div
                  className="flex flex-col gap-4 py-8 px-6 mx-4
                        rounded-xl"
                >
                  {/* Image section  */}
                  <div className="mb-3 flex justify-center">
                    <img
                      src={menu.img}
                      alt=""
                      className="rounded-full w-auto sm:max-w-[200px] 
                      md:max-w-[250px] shadow-1 "
                    />
                  </div>
                  {/* text content section */}
                  <div className="flex flex-col items-center 
                  gap-4">
                    <div className="space-y-3 text-center">
                        <h1 className="text-xl">{menu.name}</h1>
                        <p className="text-3xl font-semibold">
                            <span className="text-2xl
                            font-cursive">
                                Only
                            </span> {"   "}
                            {menu.price}.00
                            </p>
                        <a href="#">Buy Now</a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
