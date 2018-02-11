var React = require('react');

function PlayerPreview(props) {

    return (
        <div>
            <div className="column">
                <img className="avtar"
                    src={props.avatar}
                    alt={'Avatar for '  + props.username}
                />
                <h2 className='username'>@{props.username}</h2>

            </div>
            <button className='reset'
                onClick={props.onReset.bind(null, props.id)}>
                Reset
            </button>
        </div>
    )
}

module.exports = PlayerPreview;
