import { Parallax } from 'react-parallax';
import Flight from '../img/spacex-pnPS3Ox_2vE-unsplash.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Flight} speed={1.5} strength={200}>
     <div id='overview' className='content'>
        <span className='img-txt'>Company Vision & Overview</span>
     </div>
    </Parallax>
);

export default ImageTwo