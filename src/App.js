import './App.css'
import React, { Component } from 'react';
import Header from "./components/Header";
import Monitor from "./components/moniter/Monitor";
import Footer from "./components/Footer";
import ProductItem from './components/product/ProductItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products : ""};
  }

  componentDidMount() {
    this.setState({products : [
      { productId: 1, productName: "สลัดเจได", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
      { productId: 2, productName: "เจไดทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
      { productId: 3, productName: "บิงเจได", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
      { productId: 4, productName: "เฟรนเจได", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
      { productId: 5, productName: "เจได 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
      { productId: 6, productName: "เจได เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  ]})
  }
  
  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products} />
        <Footer company= "JEdilab" email="JEdi@email.com"/>
      </div>
    );
  }
}

export default App;
