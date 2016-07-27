var React=require('react');
var ReactDOM=require('react-dom');
var MovieForm=require('./MovieForm');
var MovieList=require('./MovieList');

var MovieBox=React.createClass(
  {
    getInitialState: function()
    {
      return{data:[]};
    },
    submitTitleData:function(movie)
    {

         $.ajax({
           url:"http://www.omdbapi.com/?s="+movie.Title,
           type:'GET',
           datatype:"JSON",
           success: function(data)
           {
             this.setState({data: data.Search});
             console.log(data);
           }.bind(this),
           error: function(err)
           {
             console.log(err);
           }.bind(this)
         });
    },

    render:function()
    {
      return(
        <div className="MovieBox">
        <h3>Search any movie & Add it to your database</h3>
        <MovieForm handleSubmitTitle={this.submitTitleData}/>
        <MovieList data={this.state.data}/>
        </div>
      );
    }
  }
);

module.exports=MovieBox;
