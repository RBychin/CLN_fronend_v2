import { StoriesSwiper } from '../StoriesSwiper/StoriesSwiper';

export const StoriesList = ({ stories }) => {
    if (!stories || stories.length === 0) {
        return <div>Загружаем...</div>;
    }

    return (
        <div className='flex vr-margin-10' id='storiesLine'>
            {stories && <StoriesSwiper storyList={stories} />}
        </div>
    );
};