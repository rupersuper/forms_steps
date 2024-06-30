import React from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

type Workout = {
  date: string;
  distance: number;
};

const App: React.FC = () => {
  const [workouts, setWorkouts] = React.useState<Workout[]>([]);

  const addWorkouts = (date: string, distance: number) => {
    const dateEqual = workouts.find((workout) => workout.date === date);

    if (dateEqual) {
      const updateDistance = workouts.map((workout) =>
        workout.date === date
          ? { ...workout, distance: workout.distance + distance }
          : workout
      );

      setWorkouts(updateDistance);
    } else {
      setWorkouts([...workouts, { date, distance }]);
    }
  };

  const deleteWorkout = (date: string) => {
    setWorkouts((workouts) =>
      workouts.filter((workout) => workout.date !== date)
    );
  };

  return (
    <div>
      <div className="container">
        <div className="form__warapper">
          <Form addWorkouts={addWorkouts} />
        </div>
        <div className="list__wrapper">
          <Table
            workouts={workouts}
            deleteWorkout={deleteWorkout}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
