import luke from "../assets/characters/luke.webp"

function CharacterCard() {
    return (
      <div className="col-md-4 col-lg-3">
  
        <div className="card character-card h-100">
  
          <img
            src={luke}
            className="card-img-top"
            alt="Luke"
          />
  
          <div className="card-body">
  
            <h5 className="card-title">
              Luke Skywalker
            </h5>
  
            <p className="card-text">
              Height: 172 cm
            </p>
  
            <p className="card-text">
              Mass: 77 kg
            </p>
  
            <p className="card-text">
              Gender: Male
            </p>
  
          </div>
  
        </div>
  
      </div>
    )
  }
  
  export default CharacterCard