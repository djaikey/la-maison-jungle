import '../Styles/Benner.css'
import logo from'../Assets/logo.png'

function Banner() {
    const title = "La maison jungle"
    return (
        <div className="lmj-banner" >
            <img src={logo} alt='Lam maison jungle' className='lmj-logo' />
            <h1 className='lmj-title' >{title}</h1>
        </div>
    )
}

export default Banner                                                                                                                                 