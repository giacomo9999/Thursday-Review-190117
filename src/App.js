import React, { Component } from "react";
import { Card, List } from "semantic-ui-react";
import DistrictVote from "./components/districtVote.component";

class App extends Component {
  state = {
    districts: [
      { name: "Green", votes: 0 },
      { name: "Blue", votes: 0 },
      { name: "Violet", votes: 0 }
    ]
  };

  // addVote function adds vote from DistrictVote component to appropriate district total in App's state, and is passed down from App to DistrictVote component as the attribute 'onVote'. The 'districtId' argument is passed down to DistrictVote component as "id" in props, and passed back up to App by handleClick function in DistrictVote component.
  addVote = districtId => {
    console.log(
      "Vote was clicked from " + this.state.districts[districtId].name
    );

    const revisedDistrictsArray = this.state.districts.map(
      (district, index) => {
        if (index === districtId) {
          return Object.assign({}, district, { votes: district.votes + 1 });
        } else {
          return district;
        }
      }
    );
    this.setState({ districts: revisedDistrictsArray });
  };

  render() {
    // districtList = list of components, one for each district in state
    const districtList = this.state.districts.map((district, index) => (
      <DistrictVote
        onVote={this.addVote}
        color={district.name.toLowerCase()}
        id={index}
        key={index}
      />
    ));

    const toteBoard = this.state.districts.map((district, index) => (
      <List.Item key={index}>
        {district.name}: {district.votes}
      </List.Item>
    ));

    console.log(districtList);

    return (
      <div>
        <br />
        <Card centered>
          <Card.Content>
            <List>
              <List.Header as="h3">Current Vote Totals:</List.Header>
              {toteBoard}
            </List>
          </Card.Content>
        </Card>
        {districtList}
      </div>
    );
  }
}

export default App;
