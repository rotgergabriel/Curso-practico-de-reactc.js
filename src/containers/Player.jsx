import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';
import { Link } from 'react-router-dom';

const Player = props => {
    const { id } = props;
    const hasPlaying = Object.keys(props.playing).length > 0; //Object.key utilizado para poder utilizar la propiedad length en un objeto
    
    useEffect(() => {
        props.getVideoSource(id);
    }, [])

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Return
                </button>
            </div>
        </div>
    ) : <NotFound props="Video "/>
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);