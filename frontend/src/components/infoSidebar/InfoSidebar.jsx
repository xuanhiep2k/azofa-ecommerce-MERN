import './infoSidebar.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function InfoSidebar() {
  return (
    <div className='infoSidebar'>
        <div className="infoSidebarTitle">LIÊN HỆ CHÚNG TÔI</div>
        <div className="infoSidebarDetails">
            <div className="infoSidevbarItemIcon"><PhoneIcon fontSize='small'/></div>
            <div className="infoSidebarItemTitle">
              <a href="tel:0968362866">0968.362.866</a>
            </div>
        </div>
        <div className="infoSidebarDetails">
            <div className="infoSidevbarItemIcon"><EmailIcon fontSize='small'/></div>
            <div className="infoSidebarItemTitle">
              <a href="mailto:azofa88@gmail.com">
                azofa88@gmail.com
              </a>
            </div>
        </div>
        <div className="infoSidebarDetails">
            <div className="infoSidevbarItemIcon"><LocationOnIcon fontSize='small'/></div>
            <div className="infoSidebarItemTitle">CÔNG TY TNHH MTV DƯỢC PHẨM QUỐC TẾ AZOFA</div>
        </div>
    </div>
  )
}
