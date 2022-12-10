import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const baseUrl = "http://localhost:3001";

class EditComponent extends React.Component {
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
    let userId = this.props.match.params.id;
    const url = baseUrl + "/films/get/" + userId;
    console.log(url);

    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          this.setState({
            dataEmployee: data,
            Fname: data.name,
            Fgenre: data.genre,
            Frate: data.rate,
            Fmy_rate: data.my_rate,
          });
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server " + error);
      });
  }

  render() {
    // let userId = 0;
    //let userId = this.props.match.params.employeeId;
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

  sendUpdate() {
    let userId = this.props.match.params.id;
    const baseUrl = "http://localhost:3001/films/update/" + userId;

    const datapost = {
      name: this.state.Fname,
      genre: this.state.Fgenre,
      rate: this.state.Frate,
      my_rate: this.state.Fmy_rate,
    };
    axios
      .post(baseUrl, datapost)
      .then((response) => {
        if (response.data.success) {
          alert(response.data.message);
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        alert("error 325");
      });
  }
}

export default EditComponent;
