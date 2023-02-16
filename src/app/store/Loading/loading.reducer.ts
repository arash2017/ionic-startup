import { createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.actions";

export const initialState = {show:false};

export const loadingReducer = createReducer(
  initialState,
  on(show, () => {
    return {show:true};
  }),
  on(hide, () => {
    return {show:false};
  }),
);
