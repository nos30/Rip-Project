import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const updateUser = createAction('Update User', props<{user:User}>());
export const initLogin = createAction('Init Login');
export const resetLogin = createAction('Reset Login');