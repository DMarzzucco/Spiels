import { booleansProps, CounterProps, errorMessProps, inputProps, keyProps, spielProps } from "../../ts/interfaces/interfaces"

export const paddleSpeed: number = 25
export const keyboard: keyProps = {
    w: false,
    s: false,
    i: false,
    k: false
}
export const CounterItems: CounterProps = {
    one: 0,
    two: 0
}
export const ErrorMess: errorMessProps = {
    value: "The limit value must be greater than 0",
    input: "The plater name is empty"
}
export const Values: inputProps = {
    limit: 0,
    players: {
        one: "",
        two: ""
    }
}
export const intSpiel: spielProps = {
    ball: {
        position: {
            x: 395,
            y: 195
        },
        speed: {
            x: -5,
            y: 5
        }
    },
    paddle: {
        left: 160,
        right: 160
    }
}
export const booleansItems: booleansProps = {
    paused: true,
    menu: {
        paused: false,
        starting: true,
        win: false
    },
    points: {
        one: false,
        two: false
    },
    errors: {
        players: false,
        value: false
    },
    cards: {
        versus: false,
        rematch: false
    }
}

