import { StoriesSwiper } from '../StoriesSwiper/StoriesSwiper';
import {useEffect, useState} from "react";
import {getApiRequest} from "../../utills/requests";
import {Config} from "../../utills/config";
import {Loading} from "../Loading";

export const StoriesList = () => {
    const [stories, setStories] = useState(null)
    const [loading, setLoading] = useState(true)

    const updateStories = () => {
        const fetchData = async () => {
            try {
                const [storiesResponse] = await Promise.all([
                    getApiRequest('/stories', { id: Config.telegram_id })
                ]);
                setStories(Object.values(storiesResponse));
                // setStories(storiesResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 500)
                console.log(stories)
            }
        };

        fetchData();
    }

    useEffect(() => {
        updateStories()
    }, []);


    if (!stories || loading) {
        return (<div>Загружаем...</div>)
    }

    return (
        <div className='flex vr-margin-10' id='storiesLine'>
            {stories && <StoriesSwiper storyList={stories} updateStories={updateStories} />}
        </div>
    );
};