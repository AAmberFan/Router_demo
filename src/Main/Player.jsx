import React, {Component} from 'react';
import PlayerAPI from '../PlayerApi';
import {Link} from 'react-router-dom';

class Player extends Component {
    displayPlayer(){
        const player = PlayerAPI.get(parseInt(this.props.match.params.number,10));
        console.log(parseInt(this.props.match.params.number,10));
        if(!player){
            return <div>Sorry, but the players was not found</div>;
        }else{

            return (<div>
                <h1>{player.name} (#{player.number})</h1>
                <h2>{player.position}</h2>
                <Link to='/roster'>Back</Link>
            </div>);
        }
    }
    render() {

        return (
            <div>
                {this.displayPlayer()}
            </div>

        );
    }
}

export default Player;