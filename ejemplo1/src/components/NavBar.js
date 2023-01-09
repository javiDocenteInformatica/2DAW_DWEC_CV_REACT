import React from "react";

class NavBar extends React.Component {
  render() {
    let enlaces = {
      enlace_name: ["enlace 1", "enlace 2", "enlace 3", "enlace 4"],
      enlace_link: [
        "www.google.es",        "www.google.es",        "www.google.es",        "www.google.es",
      ],
    };

    return (
      <React.Fragment>
        <ul>
          <li>
            {Array.from(enlaces).forEach((item, indice, array) => {
              return (
                <React.Fragment>
                  <a href="{}">{item[0]}</a>
                  <br />
                </React.Fragment>
              );
            })}
            ;
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBar;
