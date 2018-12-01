import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import TeamMember from "./team-member";

import styles from "../css/team";

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const maintainers = [
      {
        name: "Aman Sharma",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        social: [
          {
            name: "GitHub",
            url: "https://github.com/algomaster99"
          },
          {
            name: "Facebook",
            url: "#"
          },
          {
            name: "dribbble",
            url: "#"
          }
        ]
      },
      {
        name: "Aman Sharma",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        social: [
          {
            name: "GitHub",
            url: "https://github.com/algomaster99"
          },
          {
            name: "Facebook",
            url: "#"
          },
          {
            name: "dribbble",
            url: "#"
          }
        ]
      },
      {
        name: "Aman Sharma",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        social: [
          {
            name: "GitHub",
            url: "https://github.com/algomaster99"
          },
          {
            name: "Facebook",
            url: "#"
          },
          {
            name: "dribbble",
            url: "#"
          }
        ]
      },
      {
        name: "Aman Sharma",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        social: [
          {
            name: "GitHub",
            url: "https://github.com/algomaster99"
          },
          {
            name: "Facebook",
            url: "#"
          },
          {
            name: "dribbble",
            url: "#"
          }
        ]
      },
      {
        name: "Aman Sharma",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        social: [
          {
            name: "GitHub",
            url: "https://github.com/algomaster99"
          },
          {
            name: "Facebook",
            url: "#"
          },
          {
            name: "dribbble",
            url: "#"
          }
        ]
      },
      {
        name: "Aman Sharma",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        social: [
          {
            name: "GitHub",
            url: "https://github.com/algomaster99"
          },
          {
            name: "Facebook",
            url: "#"
          },
          {
            name: "dribbble",
            url: "#"
          }
        ]
      },
      {
        name: "Aman Sharma",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        social: [
          {
            name: "GitHub",
            url: "https://github.com/algomaster99"
          },
          {
            name: "Facebook",
            url: "#"
          },
          {
            name: "dribbble",
            url: "#"
          }
        ]
      }
    ];
    return (
      <div className={styles.container}>
        {maintainers.map(info => (
          <TeamMember info={info} />
        ))}
      </div>
    );
  }
}

export default Team;
