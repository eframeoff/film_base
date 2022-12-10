import React from "react";
import axios from "axios";
import { API } from "../utils/constants";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Fgenre: "",
      Frate: "",
      Fmy_rate: "",
    };
  }

  sendSave() {
    if (this.state.Fname === "") {
      alert("Введите название фильма!");
    } else {
      const baseUrl = API.baseUrl + API.createFilms;
      const datapost = {
        name: this.state.Fname,
        genre: this.state.Fgenre,
        rate: this.state.Frate,
        my_rate: this.state.Fmy_rate,
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
        .catch((error) => {
          alert(error);
        });
    }
  }

  render() {
    return (
      <div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Название фильма</label>
            <input
              type="text"
              className="form-control"
              placeholder="Название"
              value={this.state.Fname}
              onChange={(value) => this.setState({ Fname: value.target.value })}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">Жанр</label>
            <input
              type="text"
              className="form-control"
              placeholder="Жанр"
              value={this.state.Fgenre}
              onChange={(value) =>
                this.setState({ Fgenre: value.target.value })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">Оценка кинопоиска</label>
            <input
              type="text"
              className="form-control"
              placeholder="Оценка кинопоиска"
              value={this.state.Frate}
              onChange={(value) => this.setState({ Frate: value.target.value })}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">Моя оценка</label>
            <input
              type="text"
              className="form-control"
              placeholder="Моя оценка"
              value={this.state.Fmy_rate}
              onChange={(value) =>
                this.setState({ Fmy_rate: value.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.sendSave()}
        >
          Сохранить
        </button>
      </div>
    );
  }
}

export default Form;
