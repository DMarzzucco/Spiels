export type Action =
    | { type: 'PAUSED' }
    | { type: 'NOT_PAUSED' }
    | { type: 'RESET' }
    | { type: 'OPEN_MENU_PAUSED' }
    | { type: 'OPEN_MENU_STARTING' }
    | { type: 'OPEN_MENU_WIN' }
    | { type: 'CLOSE_MENU_PAUSED' }
    | { type: 'CLOSE_MENU_STARTING' }
    | { type: 'CLOSE_MENU_WIN' }
    | { type: 'SHOW_POINT_ONE' }
    | { type: 'HIDEN_POINT_ONE' }
    | { type: 'SHOW_POINT_TWO' }
    | { type: 'HIDEN_POINT_TWO' }
    | { type: 'SHOW_ERROR_INPUTS' }
    | { type: 'HIDEN_ERROR_INPUTS' }
    | { type: 'SHOW_ERROR_VALUE' }
    | { type: 'HIDEN_ERROR_VALUE' }
    | { type: 'SHOW_VERSUS' }
    | { type: 'HIDEN_VERSUS' }
    | { type: 'SHOW_REMATCH' }
    | { type: 'HIDEN_REMATCH' }
