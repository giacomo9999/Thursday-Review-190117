import React from "react";
import { Card, Button } from "semantic-ui-react";

class DistrictVote extends React.Component {
  // invokes onVote function passed down as prop from districtList
  handleClick = () => {
    this.props.onVote(this.props.id);
  };

  render() {
    return (
      <Card centered>
        <Card.Content>
          {/* when button is clicked, it invokes the handleClick function above */}
          <Button fluid color={this.props.color} onClick={this.handleClick}>
            Vote
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default DistrictVote;
