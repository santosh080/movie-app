var React=require('react');
var ReactDOM=require('react-dom');
var Movie=require('./Movie');

var MovieList=React.createClass(
  {
    render:function()
    {
      console.log(this.props.data);
    var Movies = this.props.data.map(function(movie) {
      return (
        <Movie MovAll={movie} key={movie.imdbID}/>
      );
    }.bind(this));
    return (
      <div className="MovieList">
          {Movies}
      </div>
    );
  }
 });

module.exports=MovieList;
