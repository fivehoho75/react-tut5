import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

export default function GamesList({games, deleteGame}) {
    const emptyMessage = (
        <p>There are no games yet in your colleciton.</p>
    );

    const gameList = (
        <div className="ui four cards">
            { games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame} />) }
        </div>
    );
    console.log('games: ', games);
    console.log('games length: ', games.lengh);
    
    return (
        <div>
           {games.lengh === 0 ?  emptyMessage : gameList}     
        </div>
    );
}

GamesList.propTypes = {
   games: PropTypes.array.isRequired,
   deleteGame: PropTypes.func.isRequired
};