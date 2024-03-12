import { Swiper, SwiperSlide } from "swiper/react";
import {  } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade';
import {useCallback, useEffect, useState} from "react";
import {postApiRequest} from "../../utills/requests";
import {Config, Config as cfg} from "../../utills/config";


export const StoriesSwiper = ({ storyList, updateStories }) => {

    const [lineWidth, setLineWidth] = useState(1)

    const getLineWidth = useCallback(() => {
        const block = document.getElementById('storiesLine');
        setLineWidth(Math.min(Math.floor(block.offsetWidth / 100), storyList.length));
    },[storyList])

    useEffect(() => {
        getLineWidth()
        window.addEventListener('resize', getLineWidth);
        return () => window.removeEventListener('resize', getLineWidth)
    }, [getLineWidth]);


    const onClickStory = (url, id) => {
        const fetchData = async () => {
            await postApiRequest('/stories', {id: cfg.user.id, story: id})
            updateStories()
        }
        fetchData()
        Config.tgWindow.HapticFeedback.impactOccurred('light')
        window.open(url)
    }

    console.log(storyList)

    return (
        <Swiper
            modules={[]}
            slidesPerView={lineWidth - 0.3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {storyList.map((content, index) => (
                <SwiperSlide key={content.id}>
                    <div onClick={() => {onClickStory(content.url, content.id)}}>
                        <div className={content.viewed?'story-card': 'story-card active'}
                             style={
                            {
                                backgroundImage: `url("${content.image}")`
                            }
                        }>
                            <div className='story-title'>{content.name}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}