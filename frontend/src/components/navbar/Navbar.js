import './navbar.css';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';

const Navbar = () =>{
  return (
    <div className='navbar'>
        <div className="navbarItem">
            <Link to='/'>
                <div className="navbarText">Trang chủ</div>
            </Link>
        </div>
        <div className="navbarItem product">
            <div className="navbarText">Sản phẩm</div>
            <span className="nabvarIcon"><ExpandMoreIcon /></span>
            <div className="navbarItemDropdown">
                <a href="/">C sủi</a>
                <a href="/">Thực phẩm bổ sung</a>
                <a href="/">Thực phẩm bảo vệ sức khỏe</a>
            </div>
        </div>
        <div className="navbarItem">
            <div className="navbarText">Công ty</div>
            {/* <span className="nabvarIcon"><ExpandMoreIcon /></span> */}
        </div>
        <div className="navbarItem">
            <div className="navbarText">Về chúng tôi</div>
            {/* <span className="nabvarIcon"><ExpandMoreIcon /></span> */}
        </div>
        <div className="navbarItem">
            <a href="https://www.facebook.com/si.duoc.94617" target="_blank" rel="noreferrer">
                <span className="nabvarIconFace"><FacebookIcon /></span>
            </a>
        </div>
    </div>
  )
}

export default Navbar