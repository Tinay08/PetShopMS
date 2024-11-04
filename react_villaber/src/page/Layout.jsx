
  import Dropdown from 'react-bootstrap/Dropdown';
  import logo from '../assets/img/shoplogo.png';
  import { Outlet, Link } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHome, faShoppingCart, faUser, faCircleUser, faFileInvoiceDollar,faLayerGroup } from '@fortawesome/free-solid-svg-icons';
 
  
  const Layout = () => {

    return (
      <>
        <div style={sidebarStyle}>
          <ul style={listStyle}>
            <li style={logoContainerStyle}>
              <img src={logo} className="logo" alt="Logo" style={{ height: '130%' }} />
            </li>
            <li style={pStyle}>
              <p>PET SHOP MANAGEMENT SYSTEM</p>
            </li>
            <hr></hr>
            <li style={itemStyle}>
              <Link to="/dashboard" style={linkStyle}  className='mt-5'>
                <FontAwesomeIcon icon={faHome} style={iconStyle} /> Dashboard
              </Link>
            </li>
            <hr></hr>
            <li style={itemStyle}  className='mt-5'>
              <Link to="/products" style={linkStyle}>
                <FontAwesomeIcon icon={faLayerGroup} style={iconStyle} /> Products
              </Link>
            </li>
            <hr></hr>
            <li style={itemStyle}  className='mt-5'>
              <Link to="/orders" style={linkStyle}>
                <FontAwesomeIcon icon={faShoppingCart} style={iconStyle} /> Orders
              </Link>
            </li>
            <hr></hr>
            <li style={itemStyle}  className='mt-5'>
              <Link to="/payments" style={linkStyle}>
                <FontAwesomeIcon icon={faFileInvoiceDollar}  style={iconStyle} /> Payments
              </Link>
            </li>
            <hr></hr>          
          </ul>
        </div>
        <div style={contentStyle}>
          <Outlet />
        </div>

        <nav style={navStyle}>
          <ul style={listStyle}>
            <li style={itemStyle2}>           
              <Dropdown>
                Welcome! Admin 
                <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ color: '#DB7093' }}>  
                  <FontAwesomeIcon icon={faCircleUser} size="xl" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/login">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>   
      </>
    );
  };


  const navStyle = {
    backgroundColor: "white",
    padding: "10px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    marginLeft: "250px",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  const sidebarStyle = {
    backgroundColor: "#DB7093",
    width: "250px",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    padding: "10px",
    color: '#E6E6FA',
    fontSize:"14px",
  };

  const contentStyle = {
    marginLeft: "220px",
    padding: "10px", 
  };

const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    height: '100px',  
  };

const pStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const listStyle = {
    listStyle: "none",
    margin: "0",
    padding: "0",
    marginLeft: "3px"    
  };

  const itemStyle = {
    margin: "10px 0",   
  };

  const itemStyle1 = {
    margin: "10px 0",
    marginBottom: '380px',  
  };

  const itemStyle2 = {
    display: 'flex',
    justifyContent: 'end',
    color:'#808080',
    fontSize:"14px",    
  };

  const linkStyle = {
    color: '#D3D3D3',
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    marginRight: "8px",
  };

  

  export default Layout;