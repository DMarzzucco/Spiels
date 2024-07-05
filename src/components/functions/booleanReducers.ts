import { booleansProps } from "../../ts/interfaces/interfaces";
import { Action } from "../../ts/types/types";

export const booleansReducer = (state: booleansProps, action: Action) => {
    switch (action.type) {
        //PAUSED 
        case 'RESET':
            return {
                ...state,
                paused: false,
                menu: {
                    ...state.menu,
                    paused: false,
                    win: false
                }
            }
        case 'PAUSED':
            return {
                ...state,
                paused: true
            }
        case 'NOT_PAUSED':
            return {
                ...state,
                paused: false
            }
        /*
   MENUS TOGGLES
   */
        // paused fc and menu paused
        case 'OPEN_MENU_PAUSED':
            return {
                ...state,
                paused: true,
                menu: {
                    ...state.menu,
                    paused: true
                }
            };
        case 'CLOSE_MENU_PAUSED':
            return {
                ...state,
                paused: false,
                menu: {
                    ...state.menu,
                    paused: false
                }
            }
        // menu starting 
        case 'OPEN_MENU_STARTING':
            return {
                ...state,
                paused: true,
                menu: {
                    ...state.menu,
                    starting: true,
                    paused: false,
                    win: false
                }
            };
        case 'CLOSE_MENU_STARTING':
            return {
                ...state,
                menu: {
                    ...state.menu,
                    starting: false
                },
                cards: {
                    ...state.cards,
                    versus: true
                }
            }
        // win menu
        case 'OPEN_MENU_WIN':
            return {
                ...state,
                paused: true,
                menu: {
                    ...state.menu,
                    win: true
                }
            }
        case 'CLOSE_MENU_WIN':
            return {
                ...state,
                paused: false,
                menu: {
                    ...state.menu,
                    win: false
                }
            }
        /*
POINT CARDS
*/
        // one 
        case 'SHOW_POINT_ONE':
            return {
                ...state,
                points: {
                    ...state.points,
                    one: true
                }
            }
        case 'HIDEN_POINT_ONE':
            return {
                ...state,
                points: {
                    ...state.points,
                    one: false
                }
            }
        // two
        case 'SHOW_POINT_TWO':
            return {
                ...state,
                points: {
                    ...state.points,
                    two: true
                }
            }
        case 'HIDEN_POINT_TWO':
            return {
                ...state,
                points: {
                    ...state.points,
                    two: false
                }
            }


        /*
ERRORS MESSAGES
*/
        // error input
        case 'SHOW_ERROR_INPUTS':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    players: true
                }
            };
        case 'HIDEN_ERROR_INPUTS':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    players: false
                }
            };
        // 
        // error value
        case 'SHOW_ERROR_VALUE':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    value: true
                }
            };
        case 'HIDEN_ERROR_VALUE':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    value: false
                }
            };
        /*
        VERSUS AND REMATCH
        */
        //  versus:
        case 'SHOW_VERSUS':
            return {
                ...state,
                cards: {
                    ...state.cards,
                    versus: true
                }
            }
        case 'HIDEN_VERSUS':
            return {
                ...state,
                cards: {
                    ...state.cards,
                    versus: false
                }
            }
        // rematch
        case 'SHOW_REMATCH':
            return {
                ...state,
                cards: {
                    ...state.cards,
                    rematch: true
                }
            }
        case 'HIDEN_REMATCH':
            return {
                ...state,
                cards: {
                    ...state.cards,
                    rematch: false
                }
            }


    }
}
