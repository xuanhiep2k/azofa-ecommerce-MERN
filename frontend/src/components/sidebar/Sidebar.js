import './sidebar.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Sidebar = () =>{
  return (
    <div className='sidebar'>
        <div className="sidebarTitle">DANH MỤC SẢN PHẨM</div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị cam</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị chanh</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị dứa</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị dâu</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị việt quất</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị chanh leo</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị chanh cherry</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi vị trà sữa</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi Actiso</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">C sủi tăng lực</div>
        </div>
        <div className="sidebarItem">
            <div className="sidevbarItemIcon"><NavigateNextIcon fontSize='small'/></div>
            <div className="sidebarItemTitle">Thực phẩm bảo vệ sức khỏe</div>
        </div>
    </div>
  )
}

export default Sidebar