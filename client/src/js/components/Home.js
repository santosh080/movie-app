var React= require('react');

var Home= React.createClass({
  render: function(){

    return (
      <div>
      <h1>Welcome!!!</h1>

    <button type="submit" className="btn btn-info" id="knowButton"><b>click Here To Know More</b></button>
    </div>
    );
  }
});

module.exports=Home;
