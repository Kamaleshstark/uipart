// ProductTable.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductTables.css';

const ProductTable = () => {
  const [products, setProducts] = useState([
    {'PRODUCTID':10001,'PRODUCTNAME':'iphone', 'QUANTITY':'10', 'MRP':'60,000','current_stage':'Manu','imgUrl':'https://www.dslr-zone.com/wp-content/uploads/2021/10/3-2-768x768.jpeg',"Manufacture" :"iphone13 of product number (Model Number: MLPG3HN/A) is moved to Retailer unit on 01-07-2023 on 02:44 A.M","Retailer":"iphone13 of product number (Model Number: MLPG3HN/A) is moved to Distributor unit on 02-07-2023 on 03:24 A.M","Distributor":"iphone13 of product number (Model Number: MLPG3HN/A) is reached on 03-07-2023 on 12:44 A.M","Consumers":"The Product is reached you Successfully Thank you",'Mdate':'01/01/2023','Rdate':'03/01/2023','Ddate':'05/01/2023',"Cdate":"07/01/2023"},
    {'PRODUCTID':10002,'PRODUCTNAME':'Jeans', 'QUANTITY':'20', 'MRP':'1,500' ,'current_stage':'Ret','imgUrl': 'https://5.imimg.com/data5/SELLER/Default/2023/3/293651150/TE/MC/BI/23344488/1645130517981-jpg.jpg',"Manufacture" :"Jeans of Style Code: BLAZE_DARKOLIVE is moved to Retailer unit on 18-07-2023 on 02:14 A.M","Retailer":"The product of Style Code: BLAZE_DARKOLIVE id moved to distributor unit on 3-03-2023","Distributor":"The product of Style Code: BLAZE_DARKOLIVE id moved to Consumers unit on 04-03-2023","Consumers":"The Product reached successfully"},
    {'PRODUCTID':10003,'PRODUCTNAME':'airpods', 'QUANTITY':'45', 'MRP':'1,400','current_stage':'Dis','imgUrl': 'https://m.economictimes.com/thumb/msid-99269882,width-1200,height-900,resizemode-4,imgsize-17096/airpods-case-display.jpg',"Manufacture" :"Jeans of Model Name: MQD83HN/A is moved to Retailer unit on 18-07-2023 on 02:14 A.M","Retailer":"The product of Model Name: MQD83HN/A moved to distributor unit on 3-03-2023","Distributor":"The product of Model Name: MQD83HN/A moved to Consumers unit on 04-03-2023","Consumers":"The Product reached successfully"},
    {'PRODUCTID':10004,'PRODUCTNAME':'lays', 'QUANTITY':'39', 'MRP':'10','current_stage':'Cons','imgUrl': 'https://cdn.grofers.com/app/images/products/sliding_image/289152a.jpg?ts=1684345618',"Manufacture" :"The lays of (Model Name:American Style) is moved to distributor unit on 17-06-2023","Retailer":"The lays of moved to distributor unit on 19-06-23","Distributor":"The lays of (Model Name:American Style) is shipped to consumer unit on 20-02-23","Consumers":"The product reached successfully"},
  ]);

  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const filtered = products.filter((product) =>
      product.PRODUCTID.toString().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    sessionStorage.setItem('selectedProduct', JSON.stringify(product));
    navigate('/DatakartTrace');
  };

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
      src="data:image/png;base64,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" // Replace with the actual image source
      alt="gs1"
      width="170"
      height="70"
      />
       <div className='mainsearch'> 
        <form id="searchForm" className="form-inline">
        <input
          id="searchInput"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by Product ID"
          aria-label="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
        Search
        </button>
      </form></div>
      <h1>Product List</h1>
      <table className="table table-striped mt-3">
        <thead className="bg-info">
          <tr>
            <th className="bg-warning">PRODUCTID</th>
            <th className="bg-warning">PRODUCTNAME</th>
            <th className="bg-warning">QUANTITY</th>
            <th className="bg-warning">MRP</th>
          </tr>
        </thead>
        <tbody id="myTable">
          {filteredProducts.map((product) => (
            <tr key={product.PRODUCTID}>
              <td>{product.PRODUCTID}</td>
              <td>
                <a
                  href="javascript:void(0);"
                  onClick={() => handleProductClick(product)}
                >
                  {product.PRODUCTNAME}
                </a>
              </td>
              <td>{product.QUANTITY}</td>
              <td>{product.MRP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ProductTable;