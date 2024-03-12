import {Config} from "../../utills/config";

export const AccountHeader = () => {
    return (

        <div className='grid hr-padd-10'>
                        <span className='left-text'>
                            <div className='flex'>
                                <img
                                    src='https://sun9-27.userapi.com/impg/I0No3U6gLkyhaTis8HrvuSjAEHOVDXEqsIjjxg/Gt7YMATpR9E.jpg?size=1280x960&quality=96&sign=60913f2272609cde5171b43b01e5a672&type=album'
                                    className='userimage' alt='User'
                                />
                                {/*<img*/}
                                {/*    src={Config.user.photo_url}*/}
                                {/*    className='userimage' alt='User'*/}
                                {/*/>*/}
                                <p className='username'>{Config.user.first_name}</p>
                            </div>
                        </span>
            <span className='right-text'>
                            ...
                        </span>
        </div>
    )
}