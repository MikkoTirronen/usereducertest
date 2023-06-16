import React, { useState } from "react";
import styled from "styled-components";
import HamburgerIcon from "./HamburgerIcon";
export default function NavigationComponent() {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleNavToggle = () => {
    if (searchBarOpen) {
      setSearchBarOpen(false);
    }
    setNavBarOpen((prev) => !prev);
  };
  const handleSearchToggle = () => {
    if (navBarOpen) {
      setNavBarOpen(false);
    }
    setSearchBarOpen((prev) => !prev);
  };
  const handleSubMenuToggle = () => {
    if (subMenuOpen) {
      setSearchBarOpen(false);
    }
    setSubMenuOpen((prev) => !prev);
  };

  return (
    <Navigation className="NAVIGATION">
      <input
        type="checkbox"
        className="SearchIcon"
        onClick={handleSearchToggle}
      ></input>

      <div className="iconContainer">
        <div>
          <button onClick={handleNavToggle}>
            <HamburgerIcon />
          </button>
        </div>
      </div>
      <div>
        <ul
          className={`MainMenu ${searchBarOpen ? "show_menu" : "close_menu"}`}
        >
          <li>
            <form>
              <input type="text" placeholder="Search..."></input>
              <input type="submit" value="Search"></input>
            </form>
          </li>
        </ul>
      </div>

      <ul className={`MainMenu ${navBarOpen ? "show_menu" : "close_menu"} `}>
        <div className="Menu btn:hover a-link:hover">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          {/* <li>
            <button onClick={handleSubMenuToggle}>Services</button>
          </li>
          <div className="apply_transition">
            {/* <ul
              className={`MainMenu ${
                subMenuOpen ? "show_menu" : "close_menu"
              } SubMenu`}
            >
              <li>
                <a href="/">service 1</a>
              </li>
              <li>
                <a href="/">service 2</a>
              </li>
              <li>
                <a href="/">service 3</a>
              </li>
            </ul>  
          </div>*/}
          {/* <li className={`${subMenuOpen ? "show_menu move_down" : ""} `}>
            <a href="/">Contact</a>
          </li> */}
        </div>
      </ul>
    </Navigation>
  );
}

const Navigation = styled.div`
  width: 50%;
  display: block;
  position: relative;
  flex-direction: column;
  color: whitesmoke;
  input[type="checkbox"] {
    display: none;
  }

  .iconContainer {
    border-radius: 0 15px 15px 0;
    background-color: rgb(49, 49, 49);
    position: relative;
    display: inline-flex;
    button {
      background: none;
      border-style: round;
      border: none;
      cursor: pointer;
    }
  }

  ul {
    text-align: center;
    z-index: 9;
    li {
      align-self: center;
      background-color: #cd8707;
      padding: 10px;
      font-size: 1.5em;
      list-style: none;
      font-weight: 600;
      a:link,
      a:visited {
        color: #f7f4f4;
        display: inline-block;
        text-decoration: none;
      }

      form {
        ::placeholder {
          color: rgb(44, 41, 41);
          text-align: center;
        }

        input[type="text"] {
          height: 35px;
          width: 160px;
          background-color: rgb(246, 241, 241);
          border: none;
          font-size: 15px;
          font-weight: 400;
          color: black;
          outline: none;
        }
        input[type="submit"] {
          height: 37px;
          width: 100px;
          background-color: rgb(0, 157, 255);
          color: whitesmoke;
          border: 3px solid white;
          font-size: 15px;
          font-weight: 400;
        }
      }
    }

    &.MainMenu {
      position: absolute;
      border-style: solid;
      border-radius: 0 15px 15px 15px;
      list-style: none;
      background-color: none;
      color: whitesmoke;
      overflow: hidden;
      margin: 0px;
      padding: 0px;
      max-width: 415px;
      min-width: 300px;
      font-size: 1vw;
      a:hover {
        color: rgb(49, 49, 49);
        font-weight: 700;
      }
      .SubMenu {
        translate: initial;
        font-size: 1vw;
        color: whitesmoke;
        font-weight: 500;
      }

      &.show_menu {
        li {
          button {
            border: none;
            background: none;
            color: whitesmoke;
            font-size: 1em;
            cursor: pointer;
          }
          button:hover {
            color: whitesmoke;
            font-weight: 700;
          }
        }
      }
      &.close_menu {
        display: none;
        height: 0%;
        width: 0%;
      }
    }
  }
  .move_down {
  }

  .apply_transition {
    animation: growDown 300ms ease-in-out;
  }
`;
