var React = require('react');
var queryString = require('query-string');
var api = require('../utils/Api');
var Link = require('react-router-dom').Link;


class Results extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            winner: null,
            loser:null,
            error:null,
            loading:true
        }
    }

    componentDidMount(){
        var players = queryString.parse(this.props.location.search);
        api.battle([
            players.playeroneName,
            players.playertwoname
        ]).then(function(results) {
          if( results=== null ){
             this.setState(function(){
                 return{
                     error: 'Oops something went wrong',
                     loading: false
                 }
             })
          }
          else {
              this.setState(function(){
                  return {
                      error: null,
                      winner: results[0],
                      loser: results[1],
                      loading: false
                  }
              })
          }
        }.bind(this))
    }
    render(){
        var winner = this.state.winner;
        var loser = this.state.loser;
        var error = this.state.error;
        var loading = this.state.loading;

        if(loading === true){
           return <p>Loading...!!!</p>
        }
        if(error){
           return (
               <div>
                   <p>{error}</p>
                   <Link to="/battle">Reset</Link>
               </div>
           )
        }
        
        return(
            <div>
                {JSON.stringify(this.state, null, 2)}
            </div>
        )
    }
}

module.exports = Results;