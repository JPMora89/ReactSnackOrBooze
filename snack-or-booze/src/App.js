import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Snack from "./FoodItem";
import Drink from "./DrinkItem";
import AddForm from "./AddItemForm";
import Menu from "./Menu";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);
  
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  const updateSnacks = (newSnack) => {
    setSnacks(snacks => [...snacks, { ...newSnack, id: newSnack.name }]);
  }

  const updateDrinks = (newDrink) => {
    setDrinks(drinks => [...drinks, { ...newDrink, id: newDrink.name }]);
  }

  if (isLoading) {
    return <p>Holdddd Up! We're Loading!! &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} type="Snacks" url="snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} type="Drinks" url="drinks"  />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add">
              <AddForm updateSnacks={updateSnacks} updateDrinks={updateDrinks} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
