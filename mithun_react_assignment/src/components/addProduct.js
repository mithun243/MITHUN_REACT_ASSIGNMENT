import React, { Component } from 'react';


class AddProduct extends Component {
  constructor(props) {
    super(props);
  
  }
  render() {
    return (
      <div>
        <label>ID:</label>
        <input type="text" name="id" onChange={(e)=>{this.props.onChangeAdd(e)}}/>
        <label>Product Name:</label>
        <input type="text" name="productName" onChange={(e)=>{this.props.onChangeAdd(e)}}/>
        <label>Price:</label>
        <input type="text" name="price" onChange={(e)=>{this.props.onChangeAdd(e)}}/>
        <label>Quantity</label>
        <input type="text" name="quantity" onChange={(e)=>{this.props.onChangeAdd(e)}}/>
        <label>R.O.L</label>
        <input type="text" name="rol" onChange={(e)=>{this.props.onChangeAdd(e)}}/>

        <button onClick={()=>{this.props.onClickAdd(this.props.tempProd)}} >
        SAVE
        </button>

      </div>
    );
  }
}

export default AddProduct;
