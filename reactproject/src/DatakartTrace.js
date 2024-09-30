import React, { useEffect, useState } from 'react';
import './DatakartTraceStyles.css';

function DatakartTrace() {
  const [fetchedProduct, setFetchedProduct] = useState(null);

  useEffect(() => {
    var storedValue = sessionStorage.getItem('selectedProduct');
    var parsedValue = JSON.parse(storedValue);

    if (!parsedValue) {
      console.error('Error: fetchedProduct is null or undefined');
      return;
    }

    setFetchedProduct(parsedValue);//value for fetched product
  }, []);

  return ( 
    <div className="parent">
    <div className="top-right-image">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi56r_HhwlL3PWI-SMAkw37E35euqtkSdi-g&usqp=CAU"
        alt="Datakart Trace"
        width="170"
        height="70"
      />
    </div>
    <div className="parent">
    <img
      src="https://www.gs1india.org/wp-content/uploads/2022/06/logo-600x402-1-600x402.png"
      alt="Datakart Trace"
      width="170"
      height="70"
      />
    <div className="parent">
      <h1 style={{ backgroundColor: 'orange' }}>Datakart Trace</h1>
      <div className="product-list">
        {fetchedProduct && (
          <div>
            <img
              src={fetchedProduct.imgUrl}
              width="100"
              height="100"
              alt="Product"
            />
            <h3>
              Product Name: {fetchedProduct.PRODUCTNAME} &emsp; Quantity:{' '}
              {fetchedProduct.QUANTITY} &emsp; MRP: {fetchedProduct.MRP}
            </h3>
          </div>
        )}
      </div>
      <div>
        <table border="2" style={{ width: '1000px' }}>
          <tbody style={{ fontSize: '28px' }}>
            <tr>
              <td className="manufacture-cell">Manufacture</td>
              <td className="retailer-cell">Retailer</td>
              <td className="distributor-cell">Distributor</td>
              <td className="consumer-cell">Consumers</td>
            </tr>
          </tbody>
          <tr>
            <td className="manufacture-cells">
              {fetchedProduct ? fetchedProduct.Manufacture : ''} 
            </td>
            <td className="retailer-cells">
              {fetchedProduct ? fetchedProduct.Retailer : ''}
            </td>
            <td className="distributor-cells">
              {fetchedProduct ? fetchedProduct.Distributor : ''}
            </td>
            <td className="consumer-cells">
              {fetchedProduct ? fetchedProduct.Consumers : ''}
            </td>
          </tr>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default DatakartTrace;
