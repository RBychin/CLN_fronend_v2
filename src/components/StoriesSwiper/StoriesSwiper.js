import { Swiper, SwiperSlide } from "swiper/react";
import {  } from 'swiper/modules';
import 'swiper/css'


export const StoriesSwiper = (data) => {

    const stCount = Math.round(window.innerWidth / 160)
    console.log(stCount)

    return (
        <Swiper
            modules={[]}
            spaceBetween={120}
            slidesPerView={stCount}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='story-card'
                     style={{backgroundImage: "url('https://bestmebelik.ru/UserFiles/Image/Pasha-stati/kuda-postavit-router-v-kvartire-s-dizajnerskim-remontom-18.jpg')"}}>
                    <div className='story-title'>Лучшие роутеры 2023</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='story-card'
                     style={{backgroundImage: "url('https://s.digitalocean.ru/upload/1681989732_news_file_4704_5beaf10d1da42.jpg')"}}>
                    <div className='story-title'>Почему 5G убивает</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='story-card'
                     style={{backgroundImage: "url('https://gamebomb.ru/files/galleries/001/9/97/291496.jpg')"}}>
                    <div className='story-title'>Новый КИНОТЕАТР</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='story-card'
                     style={{backgroundImage: "url('https://i.pinimg.com/736x/cb/82/3a/cb823aa470f9437703ae91e0a971d778.jpg')"}}>
                    <div className='story-title'>Шапочки из фольги</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='story-card'
                     style={{backgroundImage: "url('https://u.9111s.ru/uploads/202305/29/d23e7f851c9dd3726c67e7c6c416392c.jpg')"}}>
                    <div className='story-title'>Какая-то захватывающая история</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='story-card'
                     style={{backgroundImage: "url('https://proprikol.ru/wp-content/uploads/2019/12/les-krasivye-kartinki-na-rabochij-stol-1.jpg')"}}>
                    <div className='story-title'>Проверка</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='story-card'
                     style={{backgroundImage: "url('https://i.pinimg.com/736x/cb/82/3a/cb823aa470f9437703ae91e0a971d778.jpg')"}}>
                    <div className='story-title'>Шапочки из фольги</div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}