var React=require('react');

var MovieListView=require('./MovieListView');

var MovieBoxView = React.createClass({
 getInitialState:function()
 {
   return {data:[]};
 },
componentWillMount: function(){
  console.log("ajax");
$.ajax({
  url:"http://localhost:8080/movieapi/",
  type:"GET",
  datatype:"json",
  success:function(data)
  {
  console.log(data);
  this.setState({data:data});
  //console.log(movieData);
  }.bind(this),
  error:function(err){
    console.error(err.toString());
  }.bind(this)

});
},

 render: function() {
   return (
     <div className="MovieBoxView">


      <MovieListView data={this.state.data} />

     </div>
   );
 }
});
module.exports=MovieBoxView;
