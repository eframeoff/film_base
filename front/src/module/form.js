import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Fgenre: "",
      Frate: "",
      Fmy_rate: "",
    };
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

  sendSave() {
    if (this.state.Fname === "") {
      alert("Введите название фильма!");
    } else {
      const baseUrl = "http://localhost:3001/films/create";
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
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }
}

export default EditComponent;
