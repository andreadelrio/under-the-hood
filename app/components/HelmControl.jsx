var React = require('react');
var ShipInfo = require('./ShipInfo.jsx');
var NavigationDashboard = require('./NavigationDashboard.jsx');

module.exports = React.createClass({
  render: function() {
    var props = this.props;
    var ship = props.ship;
    return (
      <div className="helm">
        <div id="helm-header">
          <h1>Helm Control1123456789</h1>
        </div>
        <ShipInfo info={ship.info} updateShipInfo={props.updateShipInfo} />
        <NavigationDashboard ship={ship} />
      </div>
    );
  }
});