// modules
var React = require('react');
// components
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          { props.children }
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
