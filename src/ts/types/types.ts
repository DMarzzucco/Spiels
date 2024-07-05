export type Action =
    // PAUSED
    | { type: 'PAUSED' }
    | { type: 'NOT_PAUSED' }
    | { type: 'RESET' }

    // OPEN MENUS
    | { type: 'OPEN_MENU_PAUSED' }
    | { type: 'OPEN_MENU_STARTING' }
    | { type: 'OPEN_MENU_WIN' }
    // CLOSE MENU
    | { type: 'CLOSE_MENU_PAUSED' }
    | { type: 'CLOSE_MENU_STARTING' }
    | { type: 'CLOSE_MENU_WIN' }

    /*
    POINTS
    */
    // POINTS ONE
    | { type: 'SHOW_POINT_ONE' }
    | { type: 'HIDEN_POINT_ONE' }
    // POINTS TWO
    | { type: 'SHOW_POINT_TWO' }
    | { type: 'HIDEN_POINT_TWO' }
    /*
    ERRORS MESSAGE
    */
    // INPUT ERROR
    | { type: 'SHOW_ERROR_INPUTS' }
    | { type: 'HIDEN_ERROR_INPUTS' }
    // VALUE ERROR
    | { type: 'SHOW_ERROR_VALUE' }
    | { type: 'HIDEN_ERROR_VALUE' }
    /*
    CARDS
    */
    // VERSUS
    | { type: 'SHOW_VERSUS' }
    | { type: 'HIDEN_VERSUS' }
    // REMATCH
    | { type: 'SHOW_REMATCH' }
    | { type: 'HIDEN_REMATCH' }
