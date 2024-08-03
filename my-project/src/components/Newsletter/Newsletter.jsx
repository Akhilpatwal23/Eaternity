import React from "react";
import BgPng  from "../../assets/food2-plate.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right",
  height: "100%",
  width: "100%",
};
const Newsletter = () => {
  return (
    <div className="bg-primary text-white" style={backgroundStyle}>
      <div className="container bg-black/60 sm:bg-transparent py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ">
          <div className="space-y-4 text-center sm:text-left">
            {/* text section */}
            <h1 data-aos="fade-up" className="text2-xl sm:text-3xl font-semibold text-white/90">
              Ready to Started{" "}
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              dolores ut ad sequi reiciendis architecto voluptas eos vel eius
              labore quae minus autem illum temporibus aspernatur adipisci
              delectus, ab blanditiis?
            </p>
           
            
          </div>
           {/* input section */}
           <div data-aos="fade-up" data-aos-delay='400' className="text-center sm:text-left">
            <input
                type="text"
                placeholder="Enter your email"
                className="max-w-[400px] px-4 py-2 rounded-l-md
                 ring-0 focus:outline-none text-dark"
              />
              <button className="bg-white text-primary px-4 py-2 rounded-r-md"> {" "}
                <span className="text-sm uppercase font-semibold"> Get Started</span>
               </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
