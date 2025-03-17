"use client";
import Heading from "@/components/ui/heading";
import { testimonials } from "../../../public/assets";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Animated1Card from "@/components/ui/AnimatedCard1";

function Testimonial() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5  ">
      <Heading
        title={"Testimonial"}
        subtitle={"Your happiness is our satisfaction"}
      />
      <Swiper
        className="mt-4 md:mt-8"
        data-aos="fade-up"
        data-aos-delay={300}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          450: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide
            key={testimonial.id}
            style={{
              borderRadius: "13px",
            }}
          >
            <Animated1Card testimonial={testimonial}></Animated1Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
