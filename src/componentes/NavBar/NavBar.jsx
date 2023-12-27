
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>Reverbe</h1>

            <nav>
                <ul>
                    <li>Camperas</li>
                    <li>Remeras</li>
                    <li>Pantalones</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar