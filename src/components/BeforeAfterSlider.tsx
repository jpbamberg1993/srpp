import React from 'react'

import styles from '../styles/before-after-slider.module.css'

const BeforeAfterSlider: React.FC = () => (
  <section className={styles.container}>
    <div className={`${styles.img} ${styles.backgroundImg}`}></div>
    <div className={`${styles.img} ${styles.forgroundImg}`}></div>
    {/* <input type="range" min="1" max="100" value="50" className="slider" name="slider" id="slider" />
    <div className="slider-button"></div> */}
  </section>
)

export default BeforeAfterSlider
