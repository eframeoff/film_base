import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

import { Link } from "react-router-dom";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class listComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEmployee: [],
    };
  }

  componentDidMount() {
    this.loadFilms();
  }

  loadFilms() {
    const url = "http://localhost:3001/films/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          this.setState({ listEmployee: data });
        } else {
          alert("error web server");
        }
      })
      .catch((error) => {
        alert("error server" + error);
      });
  }

  render() {
    return (
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название фильма</th>
            <th scope="col">Жанр</th>
            <th scope="col">Оценка кинопоиска</th>
            <th scope="col">Моя оценка</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </table>
    );
  }

  loadFillData() {
    return this.state.listEmployee.map((data) => {
      return (
        <tr>
          <th>{data.id}</th>
          <td>{data.name}</td>
          <td>{data.genre}</td>
          <td>{data.rate}</td>
          <td>{data.my_rate}</td>

          <td>
            <Link className="btn btn-outline-info" to={"/edit/" + data.id}>
              Изменить
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.onDelete(data.id)}
            >
              {" "}
              Удалить{" "}
            </button>
          </td>
        </tr>
      );
    });
  }

  onDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  sendDelete(userId) {
    // url de backend
    const baseUrl = "http://localhost:3001/films/delete"; // parameter data post
    // network
    axios
      .post(baseUrl, {
        id: userId,
      })
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Deleted!", "Your films has been deleted.", "success");
          this.loadFilms();
        }
      })
      .catch((error) => {
        alert("Error 325 ");
      });
  }
}

export default listComponent;
