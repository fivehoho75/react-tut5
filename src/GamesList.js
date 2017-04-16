import React from 'react';

export default function GamesList({games}) {
    const emptyMessage = (
        <p>There are no games yet in your colleciton.</p>
    );

    const gameList = (
        <p>games list</p>
    );

    console.log('length = : ', games.lengh === 0);
    
    return (
        <div>
           {games.lengh === 0 ?  gameList : emptyMessage}     
        </div>
    );
}

GamesList.propTypes = {
   games: React.PropTypes.array.isRequired
};