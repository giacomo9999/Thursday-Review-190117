import React from "react";
import { Card, Button } from "semantic-ui-react";

class Vote extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Button fluid color="green" onClick={this.props.onClick}>
            Approve
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Vote;
