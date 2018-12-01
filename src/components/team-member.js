import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const TeamMember = ({ info }) => {
  return (
    <Card className={styles.content}>
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
