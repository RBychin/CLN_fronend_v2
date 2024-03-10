import { StoriesSwiper } from '../StoriesSwiper/StoriesSwiper';
import {useEffect, useState} from "react";
import {getApiRequest} from "../../utills/requests";
import {Config} from "../../utills/config";
import {Loading} from "../Loading";

export const StoriesList = () => {
    const [stories, setStories] = useState(null)

    const updateStories = () => {
        const fetchData = async () => {
            try {
                const [storiesResponse] = await Promise.all([
                    getApiRequest('/stories', { id: Config.telegram_id })
                ]);
                setStories(Object.values(storiesResponse));
                setStories(storiesResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                console.log(stories)
            }
        };

        fetchData();
    }

    useEffect(() => {
        updateStories()
    }, []);

    if (!stories) {
        <p>Загружаю</p>
    }

    return (
        <div className='flex vr-margin-10' id='storiesLine'>
            {stories && <StoriesSwiper storyList={stories} updateStories={updateStories} />}
        </div>
    );
};