import './index.css'

const DestinationItem = props => {
  const {destinationItemData} = props
  const {name, imgUrl} = destinationItemData

  return (
    <div className="destination-item-container">
      <img className="destination-item-image" src={imgUrl} alt={name} />
      <p className="destination-item-name">{name}</p>
    </div>
  )
}

export default DestinationItem
