import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

  
  const Products = () => {
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
        <h2>List of Products</h2 >
      </div>
      <div style={itemStyle2}> 
          <Table striped bordered hover>
            <thead>
                  <tr>
                    <td colSpan={9}>
                      <Button variant="success" style={{ marginLeft: '95rem' }}>
                        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                        Add
                      </Button>{' '}
                    </td>
                  </tr>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity in Stock</th>
                <th>Status</th>     
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Premium Cat Food </td>
                <td>Cat Food</td>
                <td>NutriPaws</td>
                <td>A nutritious blend of high-quality ingredients to support your cat's overall health and well-being.</td>
                <td>350kg.</td>
                <td>50</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Cozy Kitty Bed </td>
                <td>Pet Bedding</td>
                <td>SnugglePaws</td>
                <td> Provide your cat with the ultimate comfort with this plush and cozy cat bed. </td>
                <td>480</td>
                <td>25</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Interactive Cat Toy </td>
                <td>Cat Toys</td>
                <td>PlayfulPurr</td>
                <td>Keep your cat entertained for hours with this interactive toy.</td>
                <td>165</td>
                <td>30</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Adjustable Cat Collar </td>
                <td>Cat Accessories</td>
                <td>PurrStyle</td>
                <td>Stylish and safe, this adjustable cat collar comes with a quick-release buckle for your cat's safety. </td>
                <td>88</td>
                <td>47</td>
                <td>In stock</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Stainless Steel Cat Bowl </td>
                <td>Cat Feeding</td>
                <td>PurrfectDine</td>
                <td> Durable and hygienic, this stainless steel cat bowl is perfect for serving your cat's food or water.</td>
                <td>230</td>
                <td>15</td>
                <td>In stock</td>
              </tr>
            </tbody>
          </Table>
      </div>
    </>  
  );
};


export default Products;

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