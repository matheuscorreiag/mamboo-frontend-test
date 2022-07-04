import { actions, AppDispatch } from "..";
import api from "../../services/api";

export const fetchTasks = () => {
  return async (dispatch: AppDispatch) => {
    return await api
      .get("tasks")
      .then((res) => dispatch(actions.addCard(res.data)));
  };
};
