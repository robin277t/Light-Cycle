const StartMenu = () => {
  return (
    <div classname='menu-container'>
      <h2 classname='menu-item'>
          <body>
          <button type='button' classname='button'>
            <a href='/Singleplayer'>Singleplayer</a>
          </button>
          <button>
            <a href='/Multiplayer'>Multiplayer</a>
          </button>
          <button>
            <a href='/Options'>Options</a>
          </button>
          <button>
            <a href='/Leaderboard'>Leaderboard</a>
          </button>
          </body>
      </h2>
    </div>
  )
}

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
