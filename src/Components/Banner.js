import '../Styles/Benner.css'
import logo from '../Assets/logo.png'
import Recommendation from './Recommendation';


function Banner() {
    const title = "La maison jungle"

   
    return (

        <div className="lmj-banner">
            <div className='lmj-logo-title'>
            <img src={logo} alt='Lam maison jungle' className='lmj-logo' />
                <h1 className='lmj-title' >{title}</h1>
            </div>
            <Recommendation/>
        </div>
        
    
    );
}

export default Banner                                                                                                                                 