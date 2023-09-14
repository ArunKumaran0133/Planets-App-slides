import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-bg-container" data-testid="planets">
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
