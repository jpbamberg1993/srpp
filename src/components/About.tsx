import React from 'react'

import placeholderImage from '@/images/placeholder.svg'

const About: React.FC = () => (
  <section>
    <div>
      <p>
        We provide preservation services to mortgage brokers, financial institutions and real estate developers with a focus on special assets.
      </p>
      <img src={placeholderImage} alt='image of business people' />
    </div>
    <div>
      <p>
        We have been serving Palm Beach, Broward, and Miami Dade counties since 2010.
      </p>
      <img src={placeholderImage} alt='image of man in truck' />
    </div>
    <div>
      <p>
        All work is guaranteed with timely project updates, documentation and photos.
      </p>
      <img src={placeholderImage} alt='image of man in truck' />
    </div>
  </section>
)

export default About