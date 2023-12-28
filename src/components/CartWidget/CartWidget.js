import Carro from './assets/Carro.svg'
import '../../App.css'

const CartWidget = () => {
    return (
        <div>
            <img className='imgCarro' src={Carro} alt="Cart"/>
            0
        </div>
    )
}

export default CartWidget