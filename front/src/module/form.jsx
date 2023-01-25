import React from "react";
import axios from "axios";
import { API, CONTENT } from "../utils/constants";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmName: "",
      filmGenre: "",
      filmRate: "",
      filmMyRate: "",
    };
  }

  sendSave() {
    if (this.state.filmName === "") {
      alert("Введите название фильма!");
    } else {
      const baseUrl = API.baseUrl + API.createFilms;
      const datapost = {
        name: this.state.filmName,
        genre: this.state.filmGenre,
        rate: this.state.filmRate,
        my_rate: this.state.filmMyRate,
      };
      axios
        .post(baseUrl, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
            window.history.back();
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    }
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
            <label htmlFor="inputState">{CONTENT.FILM_KINOPOISK_RAITING}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Оценка кинопоиска"
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
          className="btn btn-primary"
          onClick={() => this.sendSave()}
        >
          {CONTENT.SAVE}
        </button>
      </div>
    );
  }
}

export default Form;
