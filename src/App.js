import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import Vote from "./components/vote.component";

class App extends Component {
  state = { votes: 0 };

  render() {
    return (
      <div>
        <br />
        <Card centered>
          <Card.Content>
            <Card.Header textAlign="center">Current Vote Total</Card.Header>
            <br />
            <Card.Header as="p" textAlign="center">
              {this.state.votes}
            </Card.Header>
          </Card.Content>
        </Card>
        <Vote />
      </div>
    );
  }
}

export default App;
