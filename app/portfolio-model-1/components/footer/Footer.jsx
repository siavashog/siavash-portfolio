import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import i1 from '../../assets/1.png'
import i2 from '../../assets/2.png'
import i3 from '../../assets/3.png'
import i4 from '../../assets/4.png'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image src={i1} width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src={i2} width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src={i3} width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src={i4} width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
