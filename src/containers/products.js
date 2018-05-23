// @flow
import {Container} from "unstated";

import products from "../services/products";

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

  loadProducts = async () => {
    const {data: list} = await products.fetch();

    this.setState({list});
  };
}
