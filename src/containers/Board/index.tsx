import { useAppSelector } from "../../hooks/redux";
import { BoardTile } from "../BoardTile";

import { Container } from "./styles";

export const Board: React.FC = () => {
  const tasks = useAppSelector((state) => state.cards);
  const pendingTasks = tasks.filter(({ status }) => status === "PENDING");
  const inProgressTasks = tasks.filter(
    ({ status }) => status === "IN_PROGRESS"
  );
  const reviewTasks = tasks.filter(({ status }) => status === "REVIEW");
  const doneTasks = tasks.filter(({ status }) => status === "DONE");

  return (
    <Container>
      <BoardTile title="Pending" tasks={pendingTasks} />
      <BoardTile title="In Progress" tasks={inProgressTasks} />
      <BoardTile title="Review" tasks={reviewTasks} />
      <BoardTile title="Done" tasks={doneTasks} />
    </Container>
  );
};
