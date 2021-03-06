import React, {Component} from "react";
import styled from "styled-components";

import connect from "./hocs/connect";

import jokes from "./containers/jokes";
import products from "./containers/products";

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto 64px;
  width: 100%;

  header {
    background: dodgerblue;
    color: white;
    text-align: center;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 12px;
    padding: 12px;

    .card {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
  }

  footer {
    background: whitesmoke;
    cursor: pointer;
    font-size: 2rem;
  }
`;

class App extends Component {
  async componentDidMount() {
    const [jokes, products] = this.props.containers;

    await [jokes.getJoke(), products.loadProducts()];
  }

  render() {
    const [jokes, products] = this.props.containers;

    console.log(products);

    return (
      <Container>
        <header className="center">
          <h1>Chuck norris jokes</h1>
        </header>
        <section>
          {jokes.state.list.map((joke, key) => (
            <div className="card" key={key}>
              {joke}
            </div>
          ))}
        </section>
        <footer onClick={jokes.getJoke} className="center">
          Get joke
        </footer>
      </Container>
    );
  }
}

export default connect([jokes, products])(App);
