import { useEffect, useState } from 'react';
import image1 from '../assets/photo-1542396601-dca920ea2807.avif';
import image2 from '../assets/photo-1542397284385-6010376c5337.avif';
import image3 from '../assets/photo-1542401886-65d6c61db217.avif';

const Images = [{ src: image1 }, { src: image2 }, { src: image3 }];

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    

    useEffect(() => {
        let interval;
        if (!isInteracting) {
            interval = setInterval(() => {
                setCurrentImage((prev) =>
                    prev < Images.length - 1 ? prev + 1 : 0
                );
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [isInteracting]);
    const Previous = () => {
        setIsInteracting(true);
        setCurrentImage(
            currentImage > 0 ? currentImage - 1 : Images.length - 1
        );
    };

    const Next = () => {
        setIsInteracting(true);
        setCurrentImage(
            currentImage < Images.length - 1 ? currentImage + 1 : 0
        );
    };

    const handleClick = (index) => {
        setIsInteracting(true);
        setCurrentImage(index);
    };

    const handleMouseEnter = () => {
        setIsInteracting(true);
    };

    const handleMouseLeave = () => {
        setIsInteracting(false);
    };

    return (
        <>
            <div className='center'>
                <button onClick={Previous} className='Previous'>
                    {'<'}
                </button>
                {Images.map((res, i) => (
                    <img
                        src={res.src}
                        alt={res.src}
                        key={res.src}
                        width={'500px'}
                        height={'500px'}
                        className={currentImage === i ? 'block' : 'none'}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
                <button onClick={Next} className='Next'>
                    {'>'}
                </button>
            </div>
            <div className='dots'>
                {Images.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => handleClick(i)}
                        className={currentImage === i ? 'span' : ''}></span>
                ))}
            </div>
        </>
    );
};

export default ImageSlider;
