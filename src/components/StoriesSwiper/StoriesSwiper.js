import { Swiper, SwiperSlide } from "swiper/react";
import {  } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade';
import {useCallback, useEffect, useState} from "react";

export const StoriesSwiper = ({ storyList }) => {

    const [lineWidth, setLineWidth] = useState(1)

    const getLineWidth = useCallback(() => {
        const block = document.getElementById('storiesLine');
        setLineWidth(Math.min(Math.floor(block.offsetWidth / 100), storyList.length));
    },[storyList])

    useEffect(() => {
        getLineWidth()
    }, [getLineWidth]);

    window.addEventListener('resize', getLineWidth);


    return (
        <Swiper
            modules={[]}
            slidesPerView={lineWidth - 0.3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {storyList.map((content, index) => (
                <SwiperSlide>
                    <a href={content.src}>
                        <div className={content.isActive?'story-card active': 'story-card'}
                             style={{backgroundImage: `url('${content.imgUrl}')`}}>
                            <div className='story-title'>{content.title}</div>
                        </div>
                    </a>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}