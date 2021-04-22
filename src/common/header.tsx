import Logo from '../assets/images/logo.png';
import '../assets/styles/header.css';

const Header = () => {
    return(
        <nav>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
        </nav>
    );
}

export default Header;