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
      <BoardTile title="Pending" tasks={pendingTasks} status="PENDING" />
      <BoardTile
        title="In Progress"
        tasks={inProgressTasks}
        status="IN_PROGRESS"
      />
      <BoardTile title="Review" tasks={reviewTasks} status="REVIEW" />
      <BoardTile title="Done" tasks={doneTasks} status="DONE" />
    </Container>
  );
};
