var React = require('react');
var starData = require('../data/starData');
var StarChart = require('./StarChart.jsx');
var Ship = require('../data/Ship.js');
var HelmControl = require('./HelmControl.jsx');

module.exports = React.createClass({
  
  getInitialState: function() {
    return { ship: new Ship() };
  },

  render: function() {
    var ship = this.state.ship;
    return (
      <div>
        <StarChart 
          starData={starData}
          ship={ship} 
          updateDestination={this.updateDestination} />
        <HelmControl ship={ship} updateShipInfo={this.updateShipInfo}/>
      </div>
    );
  },

  updateShipInfo: function(info) {
    var ship = this.state.ship;
    ship.info = info;
    this.setState({ship: ship});
  },

  updateDestination: function(newDestination) {
    var ship = this.state.ship;
    ship.destination = newDestination;
    this.setState({ship: ship});
  },
});