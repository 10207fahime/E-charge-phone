import { ActionType } from "./ActionType";
export function Reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_CHARGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
