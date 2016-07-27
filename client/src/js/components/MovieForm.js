var React=require('react');
var ReactDOM=require('react-dom');

var MovieForm=React.createClass(
  {
    getInitialState: function()
    {
      return{Title:''};
    },
    handleTitleChange: function(e)
  {
    this.setState({Title:e.target.value});
    //console.log(this.state.Title);
  },

  submitTitle: function(e)
  {
    e.preventDefault();
    this.props.handleSubmitTitle({Title:this.state.Title});
  },

  render:function()
  {
    return(
      <div className="search-form">
      <form className="navbar-form" onSubmit={this.submitTitle}>
      
      <input type="text" name="Title" value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Type movie name here" id="searchInput"/><br></br><br></br>
      <button type="submit" className="btn btn-default" id="searchButton"><b>Search</b></button><br></br><br></br>
      </form>
      </div>
    );
  }
}
);
module.exports=MovieForm;
