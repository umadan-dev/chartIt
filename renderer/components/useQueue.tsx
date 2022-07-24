import moment from "moment";
import { useEffect, useReducer } from "react";
import { Queue } from "./Queue";
import Worker from "web-worker";
const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module",
});

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

export const initStateKeys = Object.keys(initState);

const queueReducer = (state: Queue, action: IActionType) => {
  state[initStateKeys[action.key]].enqueue({
    status: +action.status,
    time: moment(action.time).format("h:mm:ss"),
  });
  if (state[initStateKeys[action.key]].length === 1250) {
    state[initStateKeys[action.key]].dequeue();
  }
  return state;
};

export const useQueue = () => {
  const [state, dispatch] = useReducer<any>(queueReducer, initState);

  useEffect(() => {
    worker.onmessage = ({ data }) => {
      //@ts-ignore
      dispatch(data);
    };
  }, []);

  return { data: state, worker };
};
