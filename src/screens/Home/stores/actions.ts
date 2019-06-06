import { ACTION_INSERT_TODO, ACTION_DELETE_TODO, ACTION_EDIT_BEGIN, ACTION_EDIT_END } from "./constants";
import { InsertTodoAction, DeleteTodoAction, BeginEditAction, EndEditAction } from "./definitions";

export function insertTodo(message: string): InsertTodoAction {
    return { type: ACTION_INSERT_TODO, message };
}

export function deleteTodo(index: number): DeleteTodoAction {
    return { type: ACTION_DELETE_TODO, index };
}

export function beginEdit(index: number): BeginEditAction {
    return { type: ACTION_EDIT_BEGIN, index };
}

export function endEdit(index: number, message: string): EndEditAction {
    return { type: ACTION_EDIT_END, index, message };
}