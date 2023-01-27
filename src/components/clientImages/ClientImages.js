import './ClientImages.css'
import img_1 from '../../images/client-databiz.svg'
import img_2 from '../../images/client-audiophile.svg'
import img_3 from '../../images/client-meet.svg'
import img_4 from '../../images/client-maker.svg'

const ClientImages = () => {
  return (
    <div className="img">
        <img src={img_1} alt="client"/>
        <img src={img_2} alt="client"/>
        <img src={img_3} alt="client"/>
        <img src={img_4} alt="client"/>
    </div>
  )
}

export default ClientImages