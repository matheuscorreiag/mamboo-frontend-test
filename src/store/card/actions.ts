import { actions, AppDispatch } from "..";
import api from "../../services/api";

interface UpdateTask {
  id: string;
  description?: string;
}

export const fetchTasks = () => {
  return async (dispatch: AppDispatch) => {
    return await api
      .get("tasks")
      .then((res) => dispatch(actions.addCard(res.data)));
  };
};

export const fetchUpdateTask = ({ id, description }: UpdateTask) => {
  return async (dispatch: AppDispatch) => {
    return await api
      .put(`tasks/${id}`, { description })
      .then((res) => dispatch(actions.updateCard(res.data)));
  };
};

export const fetchDeleteTask = ({ id }: UpdateTask) => {
  return async (dispatch: AppDispatch) => {
    return await api
      .delete(`tasks/${id}`)
      .then((res) => dispatch(actions.deleteCard(id)));
  };
};
