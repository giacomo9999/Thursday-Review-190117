import React from "react";
import { Card, Button } from "semantic-ui-react";

class Vote extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default Vote;
