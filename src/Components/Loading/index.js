import './css/style.css'
import './css/tablet.css'
import './css/desktop.css'

const Loading = () => {
  return(
    <div className="loading-container">
      <div className="loading__container-cards">
          Loading...
      </div>

      <div className="loading__container-cards">
          Loading...
      </div>

      <div className="loading__container-cards">
          Loading...
      </div>

      <div className="loading__container-cards">
          Loading...
      </div>
    </div>

    
  )
}

export { Loading }