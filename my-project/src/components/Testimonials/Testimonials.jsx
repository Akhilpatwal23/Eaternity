import React from 'react'
import Slider from 'react-slick'

const TestimonialData =[
    
        {
            id:1,
            name: "Ayush",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum iusto asperiores sequi rem laboriosam. ",
            img: "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
        },
        {
            id:2,
            name: "Ankit",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum iusto asperiores sequi rem laboriosam. ",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAg3mAXoavIRQ93Kj8MST7PDhoov313o9bg&s",
        },
        {
            id:3,
            name: "Karan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum iusto asperiores sequi rem laboriosam. ",
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        
    
    ];

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
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
    <div className='py-10 mb-10'>
        <div className='container'>
            {/* header section */}
            <div className='mb-10'>
                <h1 data-aos="fade-up" className='text-center text-4xl font-bold font-cursive2'>Testimonials</h1>
            </div>
            {/* {slider section} */}
            <div data-aos="zoom-in">
            <Slider {...settings}>

{
    TestimonialData.map((item)=>(
    <div className="my-1">
        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
         <div className='mb-4'>
            <img src={item.img}  alt="" className='rounded-full w-20 h-20'/>

         </div>
          {/* content section */}
          <div className='flex flex-col items-center gap-4'>
            <div className='space-y-3'>
                <p className='text-xs text-gray-500'>{item.text}</p>
                <h1 className='text-xl font-cursive2 text-gray-500'>{item.name}</h1>
            </div>
          </div>
          <p className='text-black/20
          text-9xl font-serif absolute top-0 right-0'>
            ,,
          </p>
        </div>
    </div>
        
    ))
}

            </Slider>

            </div>
        </div>
        </div>
  )
}

export default Testimonials