import * as React from 'react';
import Carders from './Menu_item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

const items = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    description: 'Description 1',
    price: '$20.00',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    description: 'Description 2',
    price: '$15.00',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    description: 'Description 3',
    price: '$25.00',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    description: 'Description 4',
    price: '$18.00',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Carders
            name={item.label}
            desc={item.description}
            price={item.price}
            image={item.imgPath}
          />
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
}

export default SwiperComponent;