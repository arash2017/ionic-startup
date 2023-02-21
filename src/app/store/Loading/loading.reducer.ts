import { createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.actions";
import { LoadingState } from "./loadingState";

export const initialState = {show:false};

export const reducer = createReducer(
  initialState,
  on(show, () => {
    return {show:true};
  }),
  on(hide, () => {
    return {show:false};
  }),
);
 export function loadingReducer(state:LoadingState,action) {
  return reducer(state,action)
 }
