import React from "react";
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
      <h1> Fast React Pizza Co.</h1>
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
      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza?.name || pizza?._name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

/* ---------------------------------------------------------------------------------------------- */
/*                                   Pizza Functional Component                                   */
/* ---------------------------------------------------------------------------------------------- */
// the child component bc <Pizza/> goes inside of <Menu/>
// destructuring props
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 3}</span>
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

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  <div className="order">
    <p>
      We open at {openHour}:00 and we're open until {closeHour}:00. Come visit us or order online.
    </p>
    <button className="order_button" type="submit">
      Order
    </button>
  </div>;
}

// This is how you render the root in React V18
// StricMode will render the app twice during development to find bugs & check for outdate parts of the react API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
