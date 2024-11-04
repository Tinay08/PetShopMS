import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCat,faBasketShopping,faMoneyBill1Wave,faCalendarCheck } from '@fortawesome/free-solid-svg-icons';


  const Dashboard = () => {
    useEffect(() => {
      document.body.style.backgroundColor = '#F5F5F5'; 

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, 
[]);

  return (
    <>
      <div style={pStyle}>
        <h2>Dashboard</h2>
      </div>
      <div style={cardStyle}>   
        <Card  border="primary" style={{ width: '30rem', alignContent:'center',backgroundColor:'#4169E1', color:'#D3D3D3', margin: '0 1rem', }}>
          <Card.Body>
            <Card.Title style={{fontSize:'3rem'}}>120 <FontAwesomeIcon icon={faCat}  style={{color: "#8baadf",marginLeft: '9rem'}} /></Card.Title>
            <Card.Text>
            Total Pets 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="danger" style={{ width: '30rem', alignContent:'center',backgroundColor:'#FF4500',color:'#D3D3D3', margin: '0 1rem', }}>
          <Card.Body>
            <Card.Title  style={{fontSize:'3rem'}}>380 <FontAwesomeIcon icon={faBasketShopping} style={{color: "#df7272",marginLeft: '8rem'}} /></Card.Title>
            <Card.Text>
            Total Orders
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="success" style={{ width: '30rem', alignContent:'center',backgroundColor:'#228B22',color:'#D3D3D3', margin: '0 1rem', }}>
          <Card.Body>
            <Card.Title style={{fontSize:'3rem'}}>825 <FontAwesomeIcon icon={faCalendarCheck} style={{color: "#77b17f",marginLeft: '8rem'}} /></Card.Title>
            <Card.Text>
            Total Products
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="warning" style={{ width: '30rem', alignContent:'center',backgroundColor:'#FFA500',color:'#D3D3D3', margin: '0 1rem', }}>
          <Card.Body>
            <Card.Title  style={{fontSize:'3rem'}}>48,500 <FontAwesomeIcon icon={faMoneyBill1Wave} style={{color: "#ffbd80",marginLeft: '4rem'}} /></Card.Title>
            <Card.Text>
            Total Income
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={pStyle2}>
        <h4>Client Form</h4>
      </div>
      <div style={itemStyle2}> 
        <Table striped bordered hover>
          <thead>
                <tr>
                  <td colSpan={8}>
                    <Button variant="success" style={{ marginLeft: '95rem' }}>
                      <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                      Add
                    </Button>
                  </td>
                </tr>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email Address</th>
              <th>Gender</th>
              <th>Civil Status</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Christine </td>
              <td>Villaber</td>
              <td>Cascajo,Panglao</td>
              <td>tinay@gmail.com</td>
              <td>Female</td>
              <td>Single</td>
              <td>09262978713</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Christine </td>
              <td>Villaber</td>
              <td>Cascajo,Panglao</td>
              <td>tinay@gmail.com</td>
              <td>Female</td>
              <td>Single</td>
              <td>09262978713</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Christine </td>
              <td>Villaber</td>
              <td>Cascajo,Panglao</td>
              <td>tinay@gmail.com</td>
              <td>Female</td>
              <td>Single</td>
              <td>09262978713</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Christine </td>
              <td>Villaber</td>
              <td>Cascajo,Panglao</td>
              <td>tinay@gmail.com</td>
              <td>Female</td>
              <td>Single</td>
              <td>09262978713</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Christine </td>
              <td>Villaber</td>
              <td>Cascajo,Panglao</td>
              <td>tinay@gmail.com</td>
              <td>Female</td>
              <td>Single</td>
              <td>09262978713</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </> 
  );
};

export default Dashboard;

  const cardStyle = {
    display: 'flex',
    height: '13rem',
    fontSize:"14px", 
    padding: "10px",
    position: "fixed",
    top: 150,
    left: 0,
    right: 0,
    zIndex: 1,
    marginLeft: "250px",
  };

  const itemStyle2 = {
    display: 'flex',
    height: '13rem',
    fontSize:"14px", 
    padding: "25px",
    position: "fixed",
    top: 500,
    left: 0,
    right: 0,
    zIndex: 1,
    marginLeft: "250px",
  };

  const pStyle = {
    display: 'flex',
    justifyContent: 'start',
    padding: "10px",
    position: "fixed",
    top: 80,
    left: 0,
    right: 0,
    marginLeft: "250px",
    color:'#808080',  
  };

  const pStyle2 = {
    display: 'flex',
    justifyContent: 'start',
    padding: "10px",
    position: "fixed",
    top: 440,
    left: 0,
    right: 0,
    marginLeft: "250px",
    color:'#808080',  
  };
