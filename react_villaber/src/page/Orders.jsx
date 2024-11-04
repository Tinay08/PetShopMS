import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

  
  const Orders = () => {
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
        <h2>Order Details</h2 >
      </div>
      <div style={itemStyle2}> 
          <Table striped bordered hover>
            <thead>
                  <tr>
                    <td colSpan={7}>
                      <Button variant="success" style={{ marginLeft: '95rem' }}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                        Add
                      </Button>{' '}
                    </td>
                  </tr>
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Status</th>     
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Adjustable Cat Collar</td>
                <td>5</td>
                <td>88</td>
                <td>440</td>
                <td>June 16,2023</td>
                <td>Complete</td>             
              </tr>
              <tr>
                <td>2</td>
                <td>Premium Cat Food</td>
                <td>2</td>
                <td>350</td>
                <td>700</td>
                <td>July 7,2023</td>
                <td>Complete</td>              
              </tr>
              <tr>
                <td>3</td>
                <td>Stainless Steel Cat Bowl</td>
                <td>4</td>
                <td>230</td>
                <td>920</td>
                <td>July 10,2023</td>
                <td>Complete</td>            
              </tr>
              <tr>
                <td>4</td>
                <td>Cozy Kitty Bed</td>
                <td>5</td>
                <td>480</td>
                <td>2,400</td>
                <td>October 24,2023</td>
                <td>Complete</td>           
              </tr>
              <tr>
                <td>5</td>
                <td>Interactive Cat Toy</td>
                <td>3</td>
                <td>165</td>
                <td>495</td>
                <td>September 02,2023</td>
                <td>Complete</td>               
              </tr>
            </tbody>
          </Table>
      </div>
    </>  
  );
};


export default Orders;

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

const itemStyle2 = {
  display: 'flex',
  height: '13rem',
  fontSize:"14px", 
  padding: "25px",
  position: "fixed",
  top: 150,
  left: 0,
  right: 0,
  zIndex: 1,
  marginLeft: "250px",
};