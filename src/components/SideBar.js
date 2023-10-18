// import React, {Component} from 'react';

// import { TbSquareKey } from "react-icons/tb";

// export default class SideBar extends Component {
//     render(){
//         return (
//             <aside className="main-sidebar" >
//                 <section className="sidebar">
//                     <div className="user-panel">
//                         <div className="pull-left image">
//                             <p >Dashboard</p>
//                         </div>
//                         {/* <div className="pull-left info">
//                             <p>Alexander Pierce</p>
//                             <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
//                         </div> */}
//                     </div>
//                     {/* <form action="#" method="get" className="sidebar-form">
//                         <div className="input-group">
//                         <input type="text" name="q" className="form-control" placeholder="Search..." />
//                         <span className="input-group-btn">
//                                 <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
//                                 </button>
//                             </span>
//                         </div>
//                     </form> */}
//                     <ul className="sidebar-menu" data-widget="tree">
//                         {/* <li className="header">MAIN NAVIGATION</li> */}
//                         <div className="treeview">
//                             <a href="#">
//                                 <i className="fa fa-files-o"></i>
//                                 <FaPencilAlt size="20px" color="yellow" />
//                                 <span>Dashboard</span>
//                                 {/* <span className="pull-right-container">
//                                 <span className="label label-primary pull-right">4</span>
//                                 </span> */}
//                             </a>
//                             <ul className="treeview-menu">
//                                 <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
//                                 <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
//                                 <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
//                                 <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
//                             </ul>
//                         </div>
//                         <li>
//                         <a href="pages/widgets.html">
//                             <i className="fa fa-th"></i> <span>Widgets</span>
//                             <span className="pull-right-container">
//                             <small className="label pull-right bg-green">new</small>
//                             </span>
//                         </a>
//                         </li>
//                         <li className="treeview">
//                         <a href="#">
//                             <i className="fa fa-pie-chart"></i>
//                             <span>Charts</span>
//                             <span className="pull-right-container">
//                             <i className="fa fa-angle-left pull-right"></i>
//                             </span>
//                         </a>
//                         <ul className="treeview-menu">
//                             <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
//                             <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
//                             <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
//                             <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
//                         </ul>
//                         </li>
//                         <li>
//                         <ul className="treeview-menu">
//                             <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
//                             <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
//                         </ul>
//                         </li>
//                         <li>
//                         <a href="pages/calendar.html">
//                             <i className="fa fa-calendar"></i> <span>Calendar</span>
//                             <span className="pull-right-container">
//                             <small className="label pull-right bg-red">3</small>
//                             <small className="label pull-right bg-blue">17</small>
//                             </span>
//                         </a>
//                         </li>
//                         <li>
//                         <a href="pages/mailbox/mailbox.html" className='bottomDiv'>
//                             <i className="fa fa-envelope"></i> <span>Mailbox</span>
//                             <span className="pull-right-container">
//                             <small className="label pull-right bg-yellow">12</small>
//                             <small className="label pull-right bg-green">16</small>
//                             <small className="label pull-right bg-red">5</small>
//                             </span>
//                         </a>
//                         </li>
//                     </ul>
//                 </section>
//             </aside> 
//         )
//     }
// }MdOutlineLiveHelp

import { Link, NavLink } from 'react-router-dom';
import { TbSquareKey, TbSettings2, TbDatabaseDollar } from "react-icons/tb";
import { MdOutlineLiveHelp, MdOutlineSettings, MdPermContactCalendar } from "react-icons/md";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaRegLaughWink,
  FaHeart
} from 'react-icons/fa';
// import sidebarBg from '../assets/bg1.jpg';

const SideBar = ({
//   image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
  return (
    <Sidebar
    //   image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
      backgroundColor='rgb(6, 31, 114)'
      width='35vh'
    >
      {/* Header */}
      {/* <SidebarHeader> */}
        <Menu iconShape="circle">
            component={<Link to="/" className="link" />}
          {collapsed ? (
            <MenuItem style={{color:'white'}}
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
              component={<Link to="/" className="link" />}
            ></MenuItem>
          ) : (
            <MenuItem style={{color:'white'}}
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
              component={<Link to="/" className="link" />}
            >
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 20,
                  letterSpacing: '1px',
                  color: 'white',
                  verticalAlign: 'middle'
                }}
              ><TbSettings2 style={{fontSize:'3vh'}} />   Dashboard
              </div>
            </MenuItem>
          )}
        </Menu>
      {/* </SidebarHeader> */}
      {/* Content */}
      {/* <SidebarContent> */}
        <Menu iconShape="circle">
          <MenuItem style={{color:'white'}}
            icon={<TbSquareKey />}
            component={<Link to="/" className="link" />}
            // suffix={<span className="badge red">NEW</span>}c
          >
            Dashboard
            <NavLink to="/" />
          </MenuItem>
          {/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
          {/* <MenuItem style={{color:'white'}} 
            icon={<FaGem />}>
            Product <Link to="/components" />
          </MenuItem> */}
          <SubMenu style={{color:'white'}}
            // suffix={<span className="badge yellow">3</span>}
            title={'With Suffix'}
            icon={<MdPermContactCalendar />}
            label="Product"
            
          >
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 1</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 2</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu style={{color:'white'}}
            // suffix={<span className="badge yellow">3</span>}
            title={'With Suffix'}
            icon={<MdPermContactCalendar />}
            label="Customers"
          >
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 1</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 2</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu style={{color:'white'}}
            // prefix={<span className="badge gray">3</span>}
            title={'With Prefix'}
            icon={<TbDatabaseDollar />}
            label="Income"
          >
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 1</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 2</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu style={{color:'white'}} title={'Multi Level'} icon={<MdOutlineSettings />} label="Promote">
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 1 </MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 2 </MenuItem>
            <SubMenu title={'Submenu 3'}>
              <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 3.1 </MenuItem>
              <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 3.2 </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu style={{color:'white'}}
            // prefix={<span className="badge gray">3</span>}
            title={'With Prefix'}
            icon={<MdOutlineLiveHelp />}
            label="Help"
          >
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 1</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 2</MenuItem>
            <MenuItem style={{color:'white', backgroundColor:'rgb(6, 31, 114)'}}>Submenu 3</MenuItem>
          </SubMenu>
        </Menu>
      {/* </SidebarContent> */}
      {/* Footer */}
      {/* <SidebarFooter style={{ textAlign: 'center' }}> */}
        <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
          <Link
            className="sidebar-btn"
            style={{ cursor: 'pointer' }}
            // to="/components"
          >
            <FaUser />
            <span>My Account</span>
          </Link>
        </div>
      {/* </SidebarFooter> */}
    </Sidebar>
  );
};

export default SideBar;
