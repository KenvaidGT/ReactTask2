import React, { useState } from "react";
import "../style.css";

import BuisnesCard from "./buisnes-card";
import Gallery from "./gallery";
import Profile from "./profile";
import Hobbies from "./hobbies";
import Todo from "./todo";
import Counter from "./counter";
import OnChange from "./on-change";
import Task3 from "./task3";
import PostsList from "./posts-list";
import Dog from "./dog-image";

const ComponentShowcase = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "BuisnesCard":
        return <BuisnesCard />;
      case "Gallery":
        return <Gallery />;
      case "Profile":
        return <Profile />;
      case "Hobbies":
        return <Hobbies />;
      case "Todo":
        return <Todo />;
      case "Counter":
        return <Counter />;
      case "OnChange":
        return <OnChange />;
      case "Task3":
        return <Task3 />;
      case "PostsList":
        return <PostsList />;
      case "Dog":
        return <Dog />;
      default:
        return <p>Select a component...</p>;
    }
  };

  return (
    <div className="showcase-wrapper">
      <div className="button-panel">
        <button onClick={() => setActiveComponent("BuisnesCard")}>
          Business Card
        </button>
        <button onClick={() => setActiveComponent("Gallery")}>Gallery</button>
        <button onClick={() => setActiveComponent("Profile")}>Profile</button>
        <button onClick={() => setActiveComponent("Hobbies")}>Hobbies</button>
        <button onClick={() => setActiveComponent("Todo")}>Todo</button>
        <button onClick={() => setActiveComponent("Counter")}>Counter</button>
        <button onClick={() => setActiveComponent("OnChange")}>OnChange</button>
        <button onClick={() => setActiveComponent("Task3")}>Task List</button>
        <button onClick={() => setActiveComponent("PostsList")}>Posts</button>
        <button onClick={() => setActiveComponent("Dog")}>Dog</button>
      </div>

      <div className="component-container">{renderComponent()}</div>
    </div>
  );
};

export default ComponentShowcase;
