import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { API } from "../utils/constants";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEmployee: [],
    };
  }

  loadFilms() {
    const url = API.baseUrl + API.getFilms;
    axios
      .get(url)
      .then((res) => this.setState({ listEmployee: res.data.data }))
      .catch((error) => {
        alert(error);
      });
  }

  // Для теста - библиотека sweetalert2
  onDelete(id) {
    Swal.fire({
      title: "Удалить фильм?",
      text: "Вы уверены?",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Да, конечно",
      cancelButtonText: "Нет, остановитесь",
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  sendDelete(userId) {
    const baseUrl = API.baseUrl + API.deleteFilms;
    axios
      .post(baseUrl, {
        id: userId,
      })
      .then(() => {
        Swal.fire("Ура", "Фильм удален", "success");
        this.loadFilms();
      })
      .catch((error) => {
        alert(error);
      });
  }

  componentDidMount() {
    this.loadFilms();
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
            <Link className="btn btn-outline-info" to={API.edit + data.id}>
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
}

export default List;
