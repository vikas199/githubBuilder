var React = require('react');
var PlayerInput = require('./PlayerInput')
var PlayerPreview = require('./PlayerPreview');
var Link = require('react-router-dom').Link;

class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playeroneName: '',
            playertwoName: '',
            playeroneImage: null,
            playertwoImage: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size==200';
            return newState;

        })
    }

    handleReset(id){
        this.setState(function () {
            var newState={};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState
        })
    }
    render() {
        var match = this.props.match;
        var playeroneName = this.state.playeroneName;
        var playertwoName = this.state.playertwoName;
        var playeroneImage = this.state.playeroneImage;
        var playertwoImage = this.state.playertwoImage
        return (
            <div>
                <div className="row">
                    {!playeroneName &&
                        <PlayerInput id="playerone"
                            label="Player One"
                            onSubmit={this.handleSubmit} />}

                    {playeroneImage !== null &&
                        <PlayerPreview
                            avatar={playeroneImage}
                            username={playeroneName}
                            onReset={this.handleReset}
                            id='playerone' />}

                    {!playertwoName &&
                        <PlayerInput
                            id="playertwo"
                            label="Player Two"
                            onSubmit={this.handleSubmit} />}
                    {playertwoImage !== null &&
                        <PlayerPreview
                            avatar={playertwoImage}
                            username={playertwoName}
                            onReset={this.handleReset}
                            id="playertwo" />}
                </div>
                {playeroneImage && playertwoImage &&
                <Link className='button'
                to={{
                    pathname: match.url + '/results',
                    search: `?playeroneName=` + playeroneName + '&playertwoName=' + playertwoName
                }}>
                Battle
                </Link>}
            </div>
        )
    }
}

module.exports = Battle;