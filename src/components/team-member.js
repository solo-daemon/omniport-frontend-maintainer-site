import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styles from "../css/team-member";
const TeamMember = ({ info }) => {
  return (
    <Card raised>
      <Image src={info.image} />
      <Card.Content>
        <Card.Header>{info.name}</Card.Header>
        <br />
        <Card.Description>
          {info.social.map(profile => (
            <a href={profile.url} target="__blank">
              <Icon name={profile.name.toLowerCase()} size="large" link />
            </a>
          ))}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default TeamMember;
