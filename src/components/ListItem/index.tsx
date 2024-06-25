import { Course } from "../../App";

interface ListItemProps {
  course: Course;
}

export const ListItem = ({ course }: ListItemProps) => {
  return (
    <li>
      <b>Nome:</b> {course.name}
      <br />
      <b>Descrição:</b> {course.description}
      <br />
      <b>Instrutor:</b> {course.instructor}
      <hr />
    </li>
  );
};
