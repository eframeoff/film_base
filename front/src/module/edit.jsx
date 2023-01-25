import React from "react";
import axios from "axios";
import { API, CONTENT } from "../utils";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmName: "",
      filmGenre: "",
      filmRate: "",
      filmMyRate: "",
    };
  }

  componentDidMount() {
    let userId = this.props.match.params.id;
    const url = API.baseUrl + API.getByIdFilms + userId;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        const data = res.data.data[0];
        this.setState({
          filmName: data.name,
          filmGenre: data.genre,
          filmRate: data.rate,
          filmMyRate: data.my_rate,
        });
      })
      .catch((error) => console.log(error));
  }

  sendUpdate() {
    let userId = this.props.match.params.id;
    const baseUrl = API.baseUrl + API.updateFilms + userId;
    const datapost = {
      name: this.state.filmName,
      genre: this.state.filmGenre,
      rate: this.state.filmRate,
      my_rate: this.state.filmMyRate,
    };
    axios
      .post(baseUrl, datapost)
      .then((response) => {
        alert(response.data.message);
        window.history.back();
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">{CONTENT.FILM_NAME}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Название"
              value={this.state.filmName}
              onChange={(value) =>
                this.setState({ filmName: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">{CONTENT.FILM_GENRE}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Жанр"
              value={this.state.filmGenre}
              onChange={(value) =>
                this.setState({ filmGenre: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">{CONTENT.FILM_RAITING}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Рейтинг"
              value={this.state.filmRate}
              onChange={(value) =>
                this.setState({ filmRate: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">{CONTENT.MY_FILM_RAITING}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Моя оценка"
              value={this.state.filmMyRate}
              onChange={(value) =>
                this.setState({ filmMyRate: value.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => this.sendUpdate()}
        >
          {CONTENT.UPDATE}
        </button>
      </div>
    );
  }
}

export default Edit;
