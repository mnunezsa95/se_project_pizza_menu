import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./constants";
import "../src/index.css";

/* ---------------------------------------------------------------------------------------------- */
/*                                    App Functional Component                                    */
/* ---------------------------------------------------------------------------------------------- */
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------------------------------------- */
/*                                  Header Functional Component                                   */
/* ---------------------------------------------------------------------------------------------- */
function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>;
    </header>
  );
}

/* ---------------------------------------------------------------------------------------------- */
/*                                    Menu Functional Component                                   */
/* ---------------------------------------------------------------------------------------------- */
// parent
function Menu() {
  const hasPizzas = pizzaData;
  const numPizzas = hasPizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza?.name || pizza?._name} />;
          })}
        </ul>
      )}
    </main>
  );
}

/* ---------------------------------------------------------------------------------------------- */
/*                                   Pizza Functional Component                                   */
/* ---------------------------------------------------------------------------------------------- */
// the child component bc <Pizza/> goes inside of <Menu/>
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

/* ---------------------------------------------------------------------------------------------- */
/*                                   Footer Functional Component                                  */
/* ---------------------------------------------------------------------------------------------- */
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour; // logic to determine if restuarant is open
  console.log(isOpen);

  // the && will trigger short-circuit if isOpen is true
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="order_button" type="submit">
            Order
          </button>
        </div>
      )}
    </footer>
  );
}

// This is how you render the root in React V18
// StricMode will render the app twice during development to find bugs & check for outdate parts of the react API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
