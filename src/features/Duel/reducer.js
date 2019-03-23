const INITIAL_STATE = {
    playerOneReady : false,
    playerTwoReady : false,
    playerOne: {},
    playerTwo: {}
};

const duelReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'PLAYER_ONE_READY':
            return Object.assign( {}, state, { playerOneReady : true } );

        case 'PLAYER_TWO_READY':
            return Object.assign( {}, state, { playerTwoReady : true } );

        case 'PLAYER_ONE_UNREADY':
            return Object.assign( {}, state, { playerOneReady : false } );

        case 'PLAYER_TWO_UNREADY':
            return Object.assign( {}, state, { playerTwoReady : false } );
        
        case 'SET_PLAYER_ONE':
            return Object.assign( {}, state, { playerOne : action.payload } );

        case 'SET_PLAYER_TWO':
            return Object.assign( {}, state, { playerTwo : action.payload } );

        default:
            return state
        }
};

export default duelReducer;