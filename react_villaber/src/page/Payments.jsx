import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';


  const Payments = () => {
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
        <h2>Payment Records</h2 >
      </div>
      <div style={itemStyle2}> 
          <Table striped bordered hover>
            <thead>
                  <tr>
                    <td colSpan={6}>
                      <Button variant="success" style={{ marginLeft: '95rem' }}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                        Add
                      </Button>{' '}
                    </td>
                  </tr>
              <tr>
                <th>Transaction ID</th>
                <th>Customer Name</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Date</th>
                <th>Status</th>        
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tinay</td>
                <td>440</td>
                <td>Cash</td>
                <td>June 16,2023</td>
                <td>Successful</td>              
              </tr>
              <tr>
                <td>2</td>
                <td>Tinay</td>
                <td>495</td>
                <td>Cash</td>
                <td>September 02,2023</td>
                <td>Successful</td>            
              </tr>
              <tr>
                <td>3</td>
                <td>Tinay</td>
                <td>700</td>
                <td>Cash</td>
                <td>July 7,2023</td>
                <td>Successful</td>           
              </tr>
              <tr>
                <td>4</td>
                <td>Tinay</td>
                <td>920</td>
                <td>Cash</td>
                <td>July 10,2023</td>
                <td>Successful</td>       
             </tr>
              <tr>
                <td>5</td>
                <td>Tinay</td>
                <td>2,400</td>
                <td>Cash</td>
                <td>October 24,2023</td>
                <td>Successful</td>            
              </tr>
            </tbody>
          </Table>
      </div>
    </>  
  );
};


export default Payments;

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