import { useState } from 'react';
import Image from 'next/image';

export default function Screenshots({
    screenshots
}) {
    const [currentImage, setImage] = useState(screenshots.length > 0 ? screenshots[0].image : '');

    function handleClick(image) {
        setImage(image);
    }

    // TODO render all images on page load without priority, so they are already loaded when you navigate between them
    return (
        <section>
            <div>
                <Image
                    src={currentImage}
                    alt="Gameplay image"
                    width={1080}
                    height={720}
                    priority
                /> 
            </div>
            <div className="flex flex-nowrap w-full mt-2 gap-x-2">
                {screenshots.map((image, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => {handleClick(image.image)}}>
                        <Image
                            src={image.thumbnail}
                            alt={`Image ${index + 1}`}
                            width={354.6666667}
                            height={199.5}
                        /> 
                    </div>
                ))}
            </div>
        </section>
    );
}