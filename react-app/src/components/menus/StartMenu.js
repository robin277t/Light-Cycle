import React, { useState } from "react";
import "../app/index.scss";
import "../app/App.css";
import GameLoop from "../grid/GameLoop.js";

const StartMenu = () => {
  const [menuSelect, setMenuSelect] = useState('none');

  const selectMenu = (gamemode) => {
    setMenuSelect(gamemode);
  };

  if (menuSelect === 'none') {
    return (
      <div classname="menu-container">
        <h2 classname="menu-item">
          <body>
            <button type="button" classname="button" onClick={() => selectMenu('multiplayer')}>
              Multiplayer
            </button>
            {/* <button>
            <a href='/Multiplayer'>Multiplayer</a>
          </button>
          <button>
            <a href='/Options'>Options</a>
          </button>
          <button>
            <a href='/Leaderboard'>Leaderboard</a>
          </button> */}
          </body>
        </h2>
      </div>
    );
  } else {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={30}
        player1={"player1"}
        player2={"player2"}
      />
    );
  }
};

export default StartMenu;

// const menuItemsOptions = [
//   { text: "Singleplayer" },
//   { text: "Multiplayer" },
//   { text: "Options" },
//   { text: "Leaderboard" },
// ];

// function MenuContainer() {
// //   const [activeItem, setActiveItem] = React.useState("");
// //   const [activeItemPos, setActiveItemPos] = React.useState(0);
// //   const [activeItemColor, setActiveItemColor] = React.useState("");

// const createClickHandler = (activeItem) => (e) => {
//   e.preventDefault();
// };
// //     setActiveItem(activeItem);
// //     setActiveItemPos(document.getElementById(activeItem).offsetTop);
// //     setActiveItemColor(
// //       window
// //         .getComputedStyle(document.getElementById(activeItem))
// //         .getPropertyValue("background-color")
// //     );
// //   };

// const menuItems = menuItemsOptions.map((item) => (
//   <MenuItem item={item} createClickHandler={createClickHandler} />
// ));

//   return (
//     <div className="menu-container">
//       <span
//         className="menu-item--active"
//         style={{ top: activeItemPos, backgroundColor: activeItemColor }}
//       />
//       {menuItems}
//     </div>
//   );
// }

// function MenuItem({ createClickHandler, item }) {
//   const clickHandler = createClickHandler(item.text);

//   return (
//     <div className="menu-item" id={item.text} onClick={clickHandler}>
//       {item.text.toUpperCase()}
//     </div>
//   );
// }

// export default MenuItem
// // ReactDOM.render(<App />, document.getElementById("root"))}
