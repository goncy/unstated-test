// @flow
import {Container} from "unstated";

type Product = {
  _id: string,
  index: number,
  price: string,
  picture: string,
  stock: number,
  name: string,
  company: string,
  address: string,
  description: string,
};

type ProductsState = {
  list: Array<Product>,
};

export default class ProductsContainer extends Container<ProductsState> {
  state = {
    list: [],
  };

  loadProducts = products => {
    this.setState({list: products});
  };
}
