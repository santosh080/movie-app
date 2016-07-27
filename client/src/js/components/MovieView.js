var React=require('react');
var ReactDOM=require('react-dom');
var MovieUpdate= require('./MovieUpdate');
var MovieView=React.createClass(
  {

    getInitialState:function()
     {
       return {nameUp:'',
     showModal : false};

     },
     handleShowModal: function(){
       console.log("show");
       this.setState({showModal : true})
     },
     handleHideModal : function(){
       console.log("hide false");
       this.setState({showModal : false})
     },

    deleteMovie: function(e) {
      console.log("URL:"+this.props.MovAll.Title);
      e.preventDefault();
    $.ajax({
      url:"http://localhost:8080/movieapi/"+this.props.MovAll.imdbID,
      type:'DELETE',
      dataType:'json',

      success: function(data) {
}.bind(this),
      error: function(err) {
        console.log(err);
      }.bind(this)
    });
    console.log("Deleted");
    alert("Movie got Deleted from DataBase!!!")

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
        <form>
					<h3 className="text-center">{this.props.MovAll.Title}</h3>
          <p>Year : {this.props.MovAll.Year}</p>
          <p>Type : {this.props.MovAll.Type}</p>
          <p>IMDB-ID : {this.props.MovAll.imdbID}</p>
          <button type="submit" className="btn btn-danger" id="submitButton" onClick={this.deleteMovie} ><b>Detele</b></button>&nbsp;&nbsp;
          <a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} role="button" className="btn btn-info" data-toggle="modal">Update</a>

           {this.state.showModal?<MovieUpdate handleHideModal={this.handleHideModal} MovAll={this.props.MovAll} />:null}
            </form>
          </div>
      </div>
    </div>
    );
  }
});
module.exports = MovieView;
