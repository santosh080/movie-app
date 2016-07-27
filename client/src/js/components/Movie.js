var React=require('react');
var ReactDOM=require('react-dom');

var Movie=React.createClass(
  {
    submitMovie: function(e) {
      console.log("URL:"+this.props.MovAll.Title);
      e.preventDefault();
    $.ajax({
      url:"http://localhost:8080/movieapi/add/"+this.props.MovAll.Title,
      type:'POST',
      dataType:'json',

      success: function(data) {
}.bind(this),
      error: function(err) {
        console.log(err);
      }.bind(this)
    });
    console.log("Added");
    alert("Movie got Added to DataBase!!!")
  },
    render:function()
    {
      return(
        <div className="Movie" id = "Movie">

      <div className="row">
				<div className="col-md-4 pull-left"  id = "Poster">
					<img alt="Movie Poster" src={this.props.MovAll.Poster}/>
				</div>
				<div className="col-md-8 pull-right" id ="Deta">
        <form >
					<h3 className="text-center">{this.props.MovAll.Title}</h3>
          <p>Year : {this.props.MovAll.Year}</p>
          <p>Type : {this.props.MovAll.Type}</p>
          <p>IMDB-ID : {this.props.MovAll.imdbID}</p>
          <button type="submit" className="btn btn-default" onClick={this.submitMovie} id="submitButton" ><b>Add</b></button>
          </form>
          </div>
      </div>

    </div>
    );
  }
});
module.exports = Movie;
