import React from 'react'

import styles from '@/styles/about.module.css'
import placeholderImage from '@/images/placeholder.svg'

const About: React.FC = () => (
  <section className={styles.aboutContainer}>
    <div>
      <p>
        We provide preservation services to mortgage brokers, financial institutions and real estate developers with a focus on special assets.
      </p>
      <img src={placeholderImage} alt='image of a man loading a truck' />
    </div>
    <div>
      <p>
        We have been serving Palm Beach, Broward, and Miami Dade counties since 2010.
      </p>
      <img src={placeholderImage} alt='image of man driving a truck' />
    </div>
    <div>
      <p>
        All work is guaranteed with timely project updates, documentation and photos.
      </p>
      <img src={placeholderImage} alt='an image of a man operating a bobcat grapple bucket' />
    </div>
  </section>
)

export default About