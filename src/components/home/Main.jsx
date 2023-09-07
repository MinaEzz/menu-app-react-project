import React, { useState } from "react";
import Navbar from "../Navbar/Nav_bar";
import SectionHeader from "../header/Section_header";
import CardItem from "../card item/Card_item";
// data
import { meals } from "../../meals";

const Main = (props) => {
  // meal state
  const [mealItem, setMealItem] = useState(meals);
  // meals filteration
  const categoryFilter = (cat) => {
    if (cat === "all") {
      setMealItem(meals);
    } else {
      const filteredMeals = meals.filter((meal) => meal.category === cat);
      setMealItem(filteredMeals);
    }
  };
  // extract categories of meals and move it to new array called categories
  const categories = [
    "all",
    ...new Set(
      meals.map((meal) => {
        return meal.category;
      })
    ),
  ];
  // search
  const search = (word) => {
    if (word !== "") {
      const searchedMeals = meals.filter(
        (meal) => meal.title === word.toLowerCase()
      );
      setMealItem(searchedMeals);
    }
  };
  return (
    <main className="pd-y f-wth">
      <Navbar searchFunction={search} />
      <div className="container">
        <SectionHeader
          categories={categories}
          categoryFilterFunction={categoryFilter}
        />
        <div className="items mt-5">
          <div className="row">
            <CardItem meals={mealItem} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
