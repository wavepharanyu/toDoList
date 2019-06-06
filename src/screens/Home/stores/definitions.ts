import { AppAction } from "../../../store/definitions";

export interface TodoData {
    isEditing: boolean;
    message: string;
};

export interface TodoStates {
    todos: TodoData[];
    editingIndex: number;
}

export interface InsertTodoAction extends AppAction {
    message: string;
}

export interface DeleteTodoAction extends AppAction {
    index: number;
}

export interface BeginEditAction extends AppAction {
    index: number;
}

export interface EndEditAction extends AppAction {
    index: number;
    message: string;
}