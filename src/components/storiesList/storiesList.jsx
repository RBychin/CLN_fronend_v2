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
                    getApiRequest('/stories', { id: Config.user.id })
                ]);
                setStories(Object.values(storiesResponse));
                // setStories(storiesResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 0)
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
        <>
            {stories.length > 0 && (
                <div className='block vw-85 gradient'>
                    <p className='hint'>Узнай больше</p>
                    <div className='flex vr-margin-10' id='storiesLine'>
                        {stories && <StoriesSwiper storyList={stories} updateStories={updateStories} />}
                    </div>
                </div>
            )}

        </>
    );
};