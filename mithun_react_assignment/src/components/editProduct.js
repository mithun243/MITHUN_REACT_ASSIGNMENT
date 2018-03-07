import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';

class EditProduct extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div>
        <label>Product Name:</label>
        <input type="text" name="productName" onChange={(e)=>{this.props.onChangeEdit(e)}}
        defaultValue={this.props.editProducts.productName} />
        <label>Price:</label>
        <input type="text" name="price" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.price} />
        <label>Quantity</label>
        <input type="text" name="quantity" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.quantity} />
        <label>R.O.L</label>
        <input type="text" name="rol" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.rol} />
        <label>Submit:</label>

        <button onClick={(e)=>{this.props.onClickEdit(this.props.editProducts)}}>Save</button>
        
      </div>
    );
  }
}

export default EditProduct;
