import React, { Component } from 'react';

function NavBar(props) {

    const priorityList = props.priorityList;

    // when the user clicks on a priority tab
    // const onClick = event => {
    //     if (event.key === "Enter") {
    //         props.addMessage(event.target.value);
    //         event.target.value = '';
    //     }
    // }

    function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

      return (
        <a href="#" onClick={handleClick}>
          Click me
        </a>
      );
    }


    return (
      <div>
        <nav className="navbar">
          <div className="counsellor-profile">
              <img src="./img/profile_img.png" class="profile_img" />
          </div>
          <div className="high-priority">
              <h3 class="priority-tab">
                  Immediate Priority
              </h3>
          </div>
          <div className="high-priority">
              <h3 class="priority-tab">
                  High Priority
              </h3>
          </div>
          <div className="medium-priority">
              <h3 class="priority-tab">
                  Medium Priority
              </h3>
          </div>
          <div className="medium-priority">
              <h3 class="priority-tab">
                  Low Priority
              </h3>
          </div>

        </nav>
      </div>

    );

}
export default NavBar;
