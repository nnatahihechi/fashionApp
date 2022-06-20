import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';


const Featured = () => {
const [index, setIndex] = useState(0);
const images = [
    "/image/Inside the iHeart Music Radio Awards.jpeg",
    "/image/cloths.jpeg",
    "/image/vintage.jpeg",

];


const handleArrow =(direction)=>{
    if (direction ==="1"){
        setIndex(index !==0? index-1:2);
    }

    if (direction ==="r"){
        setIndex(index !== 2 ? index+1:0);
    }
    console.log(index);
}

    return (
        <div className={styles.container}>
            {/* /* //create two arrow for the two side of the screen// */}
            {<div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
                <Image src="/image/arrow1.png" alt="" layout='fill' objectFit="contain"/>
            </div> }

            <div className={styles.wrapper} styles={{transform: `translateX${-100*index}vw`}}>
                {/* //create a wrapper to wrap the images // */}
                    {images.map((image, i) => (
                        <div className="style imgContainer" key={i}>
                        <Image src={image} alt="" layout='fill' objectFit="contain" />

                        </div>
                        ))}
                </div>

   

            <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
            <Image src="/image/arrow2.png" alt="" layout="fill"  objectFit="contain"/>
                
            </div>
        </div>
    )
}

export default Featured


