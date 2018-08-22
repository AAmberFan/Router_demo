import React, {Component} from 'react';
import PlayerAPI from '../PlayerApi';
import {Link} from 'react-router-dom';

class FullRoster extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        PlayerAPI.all().map( p=>{
                            return (<li key={p.number}>
                                <Link to={`/roster/${p.number}`}> {p.name}</Link>
                             </li>)
                        } )
                    }
                </ul>
            </div>
        )
    }
}

export default FullRoster;