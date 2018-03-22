// @flow
import {Container} from "unstated";

type Joke = {
  icon_url: string,
  id: string,
  url: string,
  value: string,
};

type JokesState = {
  jokes: Array<Joke>,
};

const API_URL = "https://api.chucknorris.io/jokes/random";

export default class JokesContainer extends Container<JokesState> {
  state = {
    list: [],
  };

  getJoke = async () => {
    const request = await fetch(API_URL);
    const joke = await request.json();

    this.setState({list: this.state.list.concat(joke.value)});
  };
}
