import React from 'react'
import { styled } from '../styles/theme'

import backgroundImg from '@/images/pool-after.jpg'
import forgroundImg from '@/images/pool-before.jpg'

type State = { sliderPosition: string }

const SectionComponent = styled.section`
  position: relative;
  max-width: 900px;
  height: 600px;
  border: 2px solid white;

  .backgroundImg,
  .forgroundImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 900px 100%;
  }

  .backgroundImg {
    background-image: url(${backgroundImg});
  }

  .forgroundImg {
    background-image: url(${forgroundImg});
  }
`

const Slider = styled.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: rgba(242, 242, 242, 0.1);
  outline: none;
  margin: 0;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(#f2f2f2, .1);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 600px;
    background: white;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 6px;
    height: 600px;
    background: white;
    cursor: pointer;
  }
`

const SliderButton = styled.div`
  pointer-events: none;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  left: calc(50% - 18px);
  top: calc(50% - 18px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    padding: 3px;
    display: inline-block;
    border: solid #5D5D5D;
    border-width: 0 2px 2px 0;
    transform: rotate(135deg);
  }

  &:after {
    content: '';
    padding: 3px;
    display: inline-block;
    border: solid #5D5D5D;
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
  }
`

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
        <SectionComponent>
          <div className="backgroundImg"></div>
          <div
            className="forgroundImg"
            style={{ width: sliderPositionWidth }}></div>
          <Slider
            type="range"
            min="1"
            max="100"
            value={this.state.sliderPosition}
            name="slider"
            id="slider"
            onChange={this.handleChange} />
          <SliderButton style={{ left: `calc(${sliderPositionWidth} - 17.5px)` }}></SliderButton>
        </SectionComponent>
    )
  }  
}

export default BeforeAfterSlider
