import './banner.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderSettings } from '../../dummyData';

const Banner = () =>{
    
  return (
    <div className='banner'>
        <Slider {...sliderSettings}>
            <div className="">
                <img className='bannerImg' src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/122145096_402515241151117_560129999522686289_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-kWwRgEWe1EAX8YUgB4&tn=kINUsOAA-IoCOhgK&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_scaGc8DS0K2nzC0rcfsQwtfjyBH3uXjZ5rQNfmKhWEg&oe=62494343" alt="" />
            </div>
            <div className="">
                <img className='bannerImg' src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/104393798_760218851455180_4279034890704564360_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=vnKFtqg440cAX8ulUkL&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-TrNOuNXmShwxcMv_-_BnI-vnBrZLz5PIt4qQVxkBQUw&oe=624745D1" alt="" />
            </div>
            <div className="">
                <img className='bannerImg' src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/122145096_402515241151117_560129999522686289_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-kWwRgEWe1EAX8YUgB4&tn=kINUsOAA-IoCOhgK&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_scaGc8DS0K2nzC0rcfsQwtfjyBH3uXjZ5rQNfmKhWEg&oe=62494343" alt="" />
            </div>
            <div className="">
                <img className='bannerImg' src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/122145096_402515241151117_560129999522686289_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-kWwRgEWe1EAX8YUgB4&tn=kINUsOAA-IoCOhgK&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_scaGc8DS0K2nzC0rcfsQwtfjyBH3uXjZ5rQNfmKhWEg&oe=62494343" alt="" />
            </div>
        </Slider>
    </div>
  )
}

export default Banner