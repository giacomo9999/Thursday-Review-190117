import React from "react";
import { Card, Button } from "semantic-ui-react";

class Vote extends React.Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <Card centered>
        <Card.Content>
          <Button fluid color="green" onClick={this.handleClick}>
            Approve
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Vote;
