// Screenshots - displays images for a product

import { useState } from 'react';
import Image from 'next/image';

export default function Screenshots({
    screenshots
}) {
    const [currentImage, setImage] = useState(0);

    function handleClick(index) {
        setImage(index);
    }

    return (
        <section>
            <div>
                {screenshots.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    alt="Gameplay image"
                    width={1080}
                    height={720}
                    className={index !== currentImage ? 'hidden' : ''}
                    priority
                /> 
                ))}
            </div>
            <div className="flex flex-nowrap w-full mt-2 gap-x-2">
                {screenshots.map((image, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => {handleClick(index)}}>
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