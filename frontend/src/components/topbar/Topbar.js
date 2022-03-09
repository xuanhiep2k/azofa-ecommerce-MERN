import './topbar.css';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { logo } from '../../dummyData';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import CallIcon from '@material-ui/icons/Call';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Topbar= () =>{

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    //get Token
    const user = JSON.parse(localStorage.getItem('authToken'));

    const getCartCount = () =>{
        return cartItems
        .reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const logoutHandle = (req, res) =>{
        localStorage.removeItem('authToken');
        navigate('/login');
    }

  return (
    <div className='topbar'>
        <div className="topbarLogo">
            <Link to='/'>
                <img src={logo} alt="logo" className="topbarLogoImg" />
            </Link>
        </div>
        
        <div className="topbarItem">
            <div className="topbarItemSearch">
                <span className='topbarSearchIcon'><SearchIcon /></span>
                <input type="text" className=" topbarFormSearch" placeholder='Bạn cần tìm gì?'/>
            </div>
            <div className="topbarItemMore call">
                <span className="topbarIcon"><CallIcon fontSize='large'/></span>
                <a href="tel:0968362866">
                    <div className="topbarText">
                        <div>Gọi đặt hàng</div>
                        <div className="phone">0968.362.866</div>
                    </div>
                </a>
            </div>
            <div className="topbarItemMore">
                <span className="topbarIcon"><MyLocationIcon fontSize='large'/></span>
                <a href="https://goo.gl/maps/86k6AJoxi5teRaWN7" target="_blank" rel="noreferrer">
                    <div className="topbarText">
                        Hải<br/> Dương
                    </div>
                </a>
            </div>
            <div className="topbarItemMore">
                <span className="topbarIcon"><LocalShippingIcon fontSize='large'/></span>
                <div className="topbarText">
                    Tra cứu<br/> đơn hàng
                </div>
            </div>
            <Link to='/cart'>
                <div className="topbarItemMore">
                        <i className="topbarIcon"><ShoppingCartIcon fontSize='large'/></i>
                        <span className="cartlogo__badge">{getCartCount()}</span>
                        <div className="topbarText">
                            Giỏ<br/> hàng
                        </div>
                </div>
            </Link>
            
            {
                user ? <>
                    <div className="topbarItemMore account login">
                        <div className="topbarIcon account">
                            <AccountCircleIcon fontSize="large"/>
                        </div>
                        <div className="topbarText account username">
                            {user.username}
                        </div>
                        <div className='logout'>
                            <ExitToAppIcon onClick={logoutHandle}/>
                        </div>
                    </div>
                </> : <>
                    <Link to='/login'>
                        <div className="topbarItemMore account">
                            <div className="topbarIcon account">
                                <AccountCircleIcon fontSize="large"/>
                            </div>
                            <div className="topbarText account">
                                Member
                            </div>
                        </div>
                    </Link>
                </>
            }
        </div>
    </div>
  )
}

export default Topbar