import '../Styles/Cart.css'

function Cart() {

    const monteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15

    return (
        <div className='lmj-cart' >
            <div>
                <p>Fermer</p>
            </div>
            <h2>Panier</h2>
            <ul>
                <li>Monstera :{monteraPrice}€ </li>
                <li>Lierre{ivyPrice}€</li>
                <li>Fleurs{flowerPrice}€</li>
            </ul>

            <p>TOTAL{monteraPrice+ivyPrice+flowerPrice}€ </p>
        </div>
    ) 
}

export default Cart