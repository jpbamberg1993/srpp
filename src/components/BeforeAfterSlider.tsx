import React from 'react'

import styles from '../styles/before-after-slider.module.css'

type State = { sliderPosition: string }
class BeforeAfterSlider extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = { sliderPosition: '50' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ sliderPosition: event.target.value })
  }

  render() {
    const sliderPositionWidth: string = this.state.sliderPosition + '%'
    return (
        <section className={styles.container}>
          <div className={`${styles.img} ${styles.backgroundImg}`}></div>
          <div
            className={`${styles.img} ${styles.forgroundImg}`}
            style={{ width: sliderPositionWidth }}
          ></div>
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.sliderPosition}
            className={styles.slider}
            name="slider"
            id="slider"
            onChange={this.handleChange} />
          {/* <div className="slider-button"></div> */}
        </section>
    )
  }  
}

export default BeforeAfterSlider
