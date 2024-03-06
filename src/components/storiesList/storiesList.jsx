import {StoriesSwiper} from "../StoriesSwiper/StoriesSwiper";

export const StoriesList = () => {

    const stories = [
        {
            imgUrl: 'https://bestmebelik.ru/UserFiles/Image/Pasha-stati/kuda-postavit-router-v-kvartire-s-dizajnerskim-remontom-18.jpg',
            title: 'Лучшие роутеры 2023',
            isActive: true,
            src: 'https://telegra.ph/Test-03-06-327'
        },
        {
            imgUrl: 'https://s.digitalocean.ru/upload/1681989732_news_file_4704_5beaf10d1da42.jpg',
            title: 'Почему 5G убивает',
            isActive: true
        },
        {
            imgUrl: 'https://i.pinimg.com/736x/cb/82/3a/cb823aa470f9437703ae91e0a971d778.jpg',
            title: 'Шапочки из фольги',
            isActive: false
        },
        {
            imgUrl: 'https://u.9111s.ru/uploads/202305/29/d23e7f851c9dd3726c67e7c6c416392c.jpg',
            title: 'Захватывающая история',
            isActive: false
        },
        {
            imgUrl: 'https://proprikol.ru/wp-content/uploads/2019/12/les-krasivye-kartinki-na-rabochij-stol-1.jpg',
            title: 'Просто картинка',
            isActive: false
        }

    ]

    return (
        <>
            <div className='flex vr-margin-10' id='storiesLine'>
                <StoriesSwiper storyList={stories} />
            </div>
        </>
    )
}