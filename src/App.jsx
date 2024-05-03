import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Prezentation from "./components/Prezentation/Prezentation"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const items = [
    {
      id: 1,
      name: "Хорунжий Владислав Максимович",
      img: "p1.jpg",
      rank: "Профессор, доктор наук.",
      category: "Сотрудник",
      mail: "v.m.khorunzhiy@yandex.ru",
    },
    {
      id: 2,
      name: "Иванова Елена Петровна",
      img: "p3.jpg",
      rank: "Доцент, кандидат наук.",
      category: "Сотрудник",
      mail: "e.p.ivanova@example.com",
    },
    {
      id: 3,
      name: "Смирнов Алексей Викторович",
      img: "p2.jpg",
      rank: "Профессор, доктор наук.",
      category: "Сотрудник",
      mail: "a.v.smirnov@example.com",
    },
  ]

  return (
    <>
      <div className="wrapper">
        <Header />
        <Prezentation />
        <Items items={items} />
        <Footer />
      </div>
    </>
  );
}

export default App;
