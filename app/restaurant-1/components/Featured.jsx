import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import ArrowR from '../img/arrowr.png'
import ArrowL from '../img/arrowl.png'
import Feat1 from '../img/feat1.png'
import Feat2 from '../img/feat2.png'
import Feat3 from '../img/feat3.png'
import Feat4 from '../img/feat4.png'
const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    Feat1,
    Feat2,
    Feat3,
    Feat4
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src={ArrowL}  alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={`${styles.imgContainer} flex items-center justify-center`} key={i}>
            <Image src={img} alt="" height={650} width={650} />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src={ArrowR} alt="" layout="fill" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
