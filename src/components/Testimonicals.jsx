import React from "react";
import Slider from "react-slick";
import userImg1 from "../assets/images/user1.svg";
import userImg2 from "../assets/images/user2.svg";
import userImg3 from "../assets/images/user3.svg";
import userImg4 from "../assets/images/user4.svg";
import nextArrowIcon from "../assets/images/arrow-next.svg";
import prevArrowIcon from "../assets/images/arrow-prev.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { id: 1, avatar: userImg1, name: 'Wade Warren', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' },
  { id: 2, avatar: userImg2, name: 'Esther Howard', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' },
  { id: 3, avatar: userImg3, name: 'Guy Hawkins', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' },
  { id: 4, avatar: userImg4, name: 'Kristin Watson', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' },
  { id: 5, avatar: userImg1, name: 'Wade Warren', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' },
  { id: 6, avatar: userImg2, name: 'Esther Howard', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' },
];

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={nextArrowIcon} alt="" />
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={prevArrowIcon} alt="" />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};

const Testimonials = () => {
  return (
    <section className="testimonials">      
      <div className="section-container">
        <h6 className="section-title">Clients <span>Commentaries</span></h6>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className={`testimonial-item ${testimonial.id % 2 ? "bottom" : "top"}`} key={testimonial.id}>
              <div className="testimonial-item-inner">
                <div className="image-section">
                  <img src={testimonial.avatar} alt="" />
                </div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.description}</p>
              </div>
            </div>
          ))}        
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;