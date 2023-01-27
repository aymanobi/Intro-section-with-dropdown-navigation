import './Right.css'
import heroImage from '../../images/image-hero-desktop.png'
import heroImageMob from '../../images/image-hero-mobile.png'

const Right = () => {
  return (
    <div className="rightSide">
      <img src={heroImage} className="heroImage" alt="hero"/>
      <img src={heroImageMob} className="heroImageMob" alt="hero"/>
    </div>
    
  )
}

export default Right