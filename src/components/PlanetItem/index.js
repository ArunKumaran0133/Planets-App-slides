import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  const slider = () => (
    <div className="planet-bg-container" data-testid="planets">
      <h1 className="item-heading">Planets</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="plants-image-iem" />
      <h1 className="planet-heading">{name}</h1>
      <p className="description-text">{description}</p>
    </div>
  )

  return (
    <div className="plants-bg-container" data-testid="planets">
      {slider()}
    </div>
  )
}

export default PlanetItem
