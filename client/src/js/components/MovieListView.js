var React=require('react');
var ReactDOM=require('react-dom');
var MovieView=require('./MovieView');

var MovieListView=React.createClass(
  {
    render:function()
    {
      console.log(this.props.data);
    var Movies = this.props.data.map(function(movie) {
      return (
        <MovieView MovAll={movie} key={movie.imdbID}></MovieView>
      );
    }.bind(this));
    return (
      <div className="MovieListView">
          {Movies}
      </div>
    );
  }
 });

module.exports=MovieListView;
