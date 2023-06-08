import './Styles/Slider.css'

function Slider({handleSliderChange, sliderPosition}) {
    return (
        <input
            type='range'
            id='slider'
            min={0}
            max={100}
            value={sliderPosition}
            onChange={handleSliderChange}
        />
    )
}

export default Slider