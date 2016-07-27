var React = require('react');
var {render} =require('react-dom');
var {browserHistory, Route, Router,Link, IndexRoute} = require('react-router');
var MovieBox= require('./components/MovieBox');
var MovieBoxView= require('./components/MovieBoxView');
var NavBarComponent= require('./components/NavBarComponent');
var Home= require('./components/Home');
//ReactDOM.render(<MovieBox/>,document.getElementById('app'));
//ReactDOM.render(<MovieBoxView/>,document.getElementById('app'));

var MainComponent = React.createClass({
  render: function()
  {
    return(
      <div className="MainComponent">
      <NavBarComponent />
      <br/><br/><br/>
      {this.props.children}
      </div>

    );
  }
});
render(
   <Router history = {browserHistory}>
      <Route path = "/" component = {MainComponent}>
         <IndexRoute component = {Home} />
         <Route path= "Home" component = {Home} />
         <Route path = "MovieBoxView" component = {MovieBoxView} />
         <Route path = "MovieBox" component = {MovieBox} />
      </Route>
   </Router>, document.getElementById('app'));
