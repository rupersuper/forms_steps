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
  const [currentWorkout, setCurrentWorkout] = React.useState<Workout | null>(
    null
  );
  const [isEditing, setIsEditing] = React.useState(false);

  const addWorkouts = (date: string, distance: number) => {
    const dateEqual = workouts.find((workout) => workout.date === date);
    
    if (dateEqual && !isEditing) {
      const updateDistance = workouts.map((workout) =>
        workout.date === date
          ? { ...workout, distance: workout.distance + distance }
          : workout
      );
      setWorkouts(updateDistance);
    } else if (isEditing) {
      const updatedWorkouts = workouts.map((workout) =>
        workout.date === currentWorkout?.date ? { date, distance } : workout
      );
      setWorkouts(updatedWorkouts);
    } else {
      setWorkouts([...workouts, { date, distance }]);
    }
    setIsEditing(false);
    setCurrentWorkout(null);
  };

  const deleteWorkout = (date: string) => {
    setWorkouts((workouts) =>
      workouts.filter((workout) => workout.date !== date)
    );
  };

  const editWorkout = (workout: Workout) => {
    setCurrentWorkout(workout);
    setIsEditing(true);
  };

  return (
    <div>
      <div className="container">
        <div className="form__warapper">
          <Form addWorkouts={addWorkouts} currentWorkout={currentWorkout} />
        </div>
        <div className="list__wrapper">
          <Table
            workouts={workouts}
            deleteWorkout={deleteWorkout}
            editWorkout={editWorkout}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
