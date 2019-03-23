export const playerOneReadyAction = () => (
    {
      type: 'PLAYER_ONE_READY',
      payload: {}
    }
);

export const playerTwoReadyAction = () => (
    {
        type: 'PLAYER_TWO_READY',
        payload: {}
    }
);

export const playerOneUnreadyAction = () => (
    {
      type: 'PLAYER_ONE_UNREADY',
      payload: {}
    }
);

export const playerTwoUnreadyAction = () => (
    {
        type: 'PLAYER_TWO_UNREADY',
        payload: {}
    }
);

export const setPlayerOneAction = (user) => (
    {
        type: 'SET_PLAYER_ONE',
        payload: user
    }
)

export const setPlayerTwoAction = (user) => (
    {
        type: 'SET_PLAYER_TWO',
        payload: user
    }
)