import React, { Component } from 'react';
import Layout from '../../layout/Layout';
import Delivery from '../../components/Deliveries';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [], // Corrected the typo here from 'produc' to 'product'
    };
    this.handleStatus = this.handleStatus.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api2/Delivered/");
      const product = await res.json();
      console.log('kamaldeen', product);
      this.setState({
        product,
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleStatus() {
    // Add your handleStatus logic here
  }

  render() {
    const { product } = this.state;
    console.log('kam',product);
    return (
      <div>
        <Layout />
        <Delivery products={product}/>
      </div>
    );
  }
}