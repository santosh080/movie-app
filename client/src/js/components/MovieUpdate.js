var React = require('react');

var MovieUpdate = React.createClass ({
 getInitialState: function(){
   return({
     Title : this.props.MovAll.Title
   });
 },
 handleTitleChange : function(e){
   this.setState({Title:e.target.value})
 },
 handleUpdate:function(e){
     console.log("path"+this.props.MovAll.Title+this.props.MovAll.Title);
   $.ajax({
     url:"http://localhost:8080/movieapi/"+this.props.MovAll._id+"/"+this.state.Title,
     type:"PUT",
     datatype:"json",
     success:function(data)
     {

     console.log(data);
     }.bind(this),
     error:function(err){
       console.error(err.toString());
     }.bind(this)

   });
   console.log("Updated");
   alert("Movie got Updated in DataBase!!!")
 },
 render: function()
 {
 return(
   <div className="modal fade" id="modal-container-808820" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">

           <button type="button" className="close" onClick={this.props.handleHideModal} data-dismiss="modal" aria-hidden="true">
             ×
           </button>
           Modify

         </div>

         <div className="modal-body">
         <div className="row">
   				<div className="col-md-4 pull-left"  id = "Poster">
   					 <img alt="Image " className="img-rounded"src={this.props.MovAll.Poster}/>
          </div>
   				<div className="col-md-8 pull-right" id ="Deta">
          <p>Title :
           <input type="text" placeholder="Movie Title" defaultValue={this.props.MovAll.Title} onChange={this.handleTitleChange}/></p>
         </div>
         </div>
         <div className="modal-footer">

           <button type="button" onClick={this.props.handleHideModal} className="btn btn-default"  data-dismiss="modal">
             Close
           </button>
           <button type="button" onClick={this.handleUpdate} className="btn btn-primary">
             Save changes
           </button>
         </div>
       </div>

     </div>
   </div>
</div>
 );}

});

module.exports = MovieUpdate;
