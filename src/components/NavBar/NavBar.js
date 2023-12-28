import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>COLOREADOS</h3>
                <div>
                    <button className='btn btn-primary'>GRAFITO</button>
                    <button className='btn btn-primary'>CARBÓN</button>
                    <button className='btn btn-primary'>COLOR</button>
                    <button className='btn btn-primary'>GRASA</button>
                    <button className='btn btn-primary'>ACUARELA</button>
                </div>
                <CartWidget />
        </nav>
    )
}

export default NavBar