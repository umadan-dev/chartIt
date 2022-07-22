import moment from "moment";
import { useReducer } from "react";
import { Queue } from "./Queue";
export const initState = {
  one: new Queue(),
  two: new Queue(),
  three: new Queue(),
  four: new Queue(),
  five: new Queue(),
  six: new Queue(),
  seven: new Queue(),
  eight: new Queue(),
};

interface IActionType {
  status: string;
  time: number;
  key: string;
}

const queueReducer = (state: Queue, action: IActionType) => {  
  state[action.key].enqueue({ status: +action.status, time: action.time });
  if (state[action.key].length === 1500) {
    state[action.key].dequeue();
  }
  return state;
};

export const useQueue = () => {
  const [state, dispatch] = useReducer<any>(queueReducer, initState);

  const handleDispatcher = (data: string[]) => {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - 2; j++) {
        //@ts-ignore
        dispatch({
          status: +data[i][j],
          key: Object.keys(initState)[j],
          time: moment(data[i][8]).format("h:mm:ss"),
        });
      }
    }
  };
  return { handleDispatcher, data: state };
};
