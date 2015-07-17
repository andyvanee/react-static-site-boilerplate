var React  = require('react')
var Route  = require('react-router').Route
var DefaultRoute = require('react-router').DefaultRoute
var Root   = require('./Root.jsx')
var Index  = require('./Index.jsx')
var About  = require('./About.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
  </Route>
)

module.exports = Routes
