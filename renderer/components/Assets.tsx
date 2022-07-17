import moment from "moment";

export interface IInitStateAction {
    data: number[];
    packet: string;
    time: Date;
}

export const reducer = (state: object, action: IInitStateAction) => {
    if (state[action.packet].length > 4000) {
        let deepCloned = JSON.parse(JSON.stringify(state[action.packet]));
        deepCloned.reverse();
        for (let i = 4000; i < deepCloned.length; i++) deepCloned.pop();
        return {
            ...state,
            [action.packet]: deepCloned.reverse(),
        };
    }
    return {
        ...state,
        [action.packet]: [...state[action.packet], ...action.data],
    };
};

export interface IInitSate {
    one: object[];
    two: object[];
    three: object[];
    four: object[];
    five: object[];
    six: object[];
    seven: object[];
    eight: object[];
}

export const initState: IInitSate = {
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
    six: [],
    seven: [],
    eight: [],
};

export const namesArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
];

export const dispatchPacket = (packets, dispatch) => {
    for (let i = 0; i < packets.length - 2; i++) {
        const array = [];
        for (let j = 0; j < packets[i].length - 1; j++) {
            array.push({ value: +packets[j][i], time: moment(packets[j][8]).format('MM:HH:SS') });
        }
        dispatch({ packet: namesArray[i], data: array } as any);
    }
};
