import { Parallax } from 'react-parallax';
import Launch from '../img/nasa_space_shuttle_challenger.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Launch} speed={1.5} strength={200}>
     <div id="home" className='content'>
        <span className='img-txt'>Procedural Iπagination</span>
     </div>
    </Parallax>
);

export default ImageOne