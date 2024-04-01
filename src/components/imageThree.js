import { Parallax } from 'react-parallax';
import Space from '../img/ivana-cajina-asuyh-_ZX54-unsplash (1).jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Space}  strength={200}>
     <div id='ipstrat' className='content'>
        <span className='img-txt-two'>Intellectual Property Strategy</span>
     </div>
    </Parallax>
);

export default ImageThree