import { AppAction } from "../../../store/definitions";
import { TodoStates, InsertTodoAction, DeleteTodoAction } from "./definitions";
import { ACTION_INSERT_TODO, ACTION_DELETE_TODO } from "./constants";
import { AtLeastOne } from "../../../helpers/types";

const initialState: TodoStates = {
    todos: [],
    editingIndex: -1
};

export default function(state: TodoStates = initialState, action: AppAction) {
    switch (action.type) {
        case ACTION_INSERT_TODO: {
            const act = action as InsertTodoAction; 
            const todos = [ ...state.todos ].concat({
                isEditing: false,
                message: act.message 
            });
            return Object.assign({}, state, {
                todos
            } as AtLeastOne<TodoStates>);
        }
        case ACTION_DELETE_TODO: {
            const act = action as DeleteTodoAction;
            const todos = state.todos.filter((todo, index) => index !== act.index);
            return Object.assign({}, state, {
                todos
            } as AtLeastOne<TodoStates>);
        }
        default:
            return state;
    }
}