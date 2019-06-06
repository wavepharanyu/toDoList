import { AppAction } from "../../../store/definitions";
import { TodoStates, InsertTodoAction, DeleteTodoAction, BeginEditAction, EndEditAction } from "./definitions";
import { ACTION_INSERT_TODO, ACTION_DELETE_TODO, ACTION_EDIT_BEGIN, ACTION_EDIT_END } from "./constants";
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
        case ACTION_EDIT_BEGIN: {
            const act = action as BeginEditAction;
            return Object.assign({}, state, {
                editingIndex: act.index
            } as AtLeastOne<TodoStates>);
        }
        case ACTION_EDIT_END: {
            const act = action as EndEditAction;
            const todos = state.todos.map((todo, index) => {
                if (index === state.editingIndex) {
                    return { message: act.message }
                } else {
                    return todo;
                }
            });

            return Object.assign({}, state, {
                editingIndex: -1,
                todos
            } as AtLeastOne<TodoStates>);
        }
        default:
            return state;
    }
}