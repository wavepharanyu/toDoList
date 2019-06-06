import { TodoStates } from "../screens/Home/stores/definitions";

export interface AppStates extends TodoStates {
    todo: TodoStates
};