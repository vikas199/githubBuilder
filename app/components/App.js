var React = require('react');
var Popular = require('./popular')
var Nav = require('./Nav');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var Battle = require('./Battle')
var Results = require('./results')

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path="/battle/results" component={Results} />
                        <Route path='/popular' component={Popular} />
                        <Route render={function () {
                            return <h1>Page Not Found</h1>
                        }} />
                    </Switch>

                </div>
            </Router>

        )
    }
}

module.exports = App;