import moment from "moment";

type Workout = {
  date: string;
  distance: number;
};

type TableProps = {
  workouts: Workout[];
  deleteWorkout: (date: string) => void;
  editWorkout: (workout: Workout) => void;
};

const Table: React.FC<TableProps> = ({
  workouts,
  deleteWorkout,
  editWorkout,
}) => {
  const sortedWorkouts = [...workouts].sort((a, b) => {
    return moment(a.date, "YYYY-MM-DD").isBefore(moment(b.date, "YYYY-MM-DD"))
      ? 1
      : -1;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedWorkouts.map((workout, index) => (
          <tr key={index}>
            <td>{moment(workout.date).format("DD.MM.YY")}</td>
            <td>{workout.distance}</td>
            <td>
              <button onClick={() => editWorkout(workout)} className="edit">
                ✏️
              </button>
              <button
                onClick={() => deleteWorkout(workout.date)}
                className="delete"
              >
                ✖️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
