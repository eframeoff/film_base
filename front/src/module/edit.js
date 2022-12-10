import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API } from "../utils/constants";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEmployee: {},
      Fname: "",
      Fgenre: "",
      Frate: "",
      Fmy_rate: "",
    };
  }

  componentDidMount() {
    console.log(this.props);
    let userId = this.props.match.params.id;
    const url = API.baseUrl + API.getByIdFilms + userId;

    axios
      .get(url)
      .then((res) => {
        const data = res.data.data[0];
        this.setState({
          dataEmployee: data,
          Fname: data.name,
          Fgenre: data.genre,
          Frate: data.rate,
          Fmy_rate: data.my_rate,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  sendUpdate() {
    let userId = this.props.match.params.id;
    const baseUrl = API.baseUrl + API.updateFilms + userId;

    const datapost = {
      name: this.state.Fname,
      genre: this.state.Fgenre,
      rate: this.state.Frate,
      my_rate: this.state.Fmy_rate,
    };
    axios
      .post(baseUrl, datapost)
      .then((response) => {
        alert(response.data.message);
        window.history.back();
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Назание фильма</label>
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
            <label htmlFor="inputState">Рейтинг</label>
            <input
              type="text"
              className="form-control"
              placeholder="Рейтинг"
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
          class="btn btn-primary"
          onClick={() => this.sendUpdate()}
        >
          Update
        </button>
      </div>
    );
  }
}

export default Edit;
