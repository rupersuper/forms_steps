import React from "react";

type Workout = {
  date: string;
  distance: number;
};

type FormProps = {
  addWorkouts: (date: string, distance: number) => void;
  currentWorkout: Workout | null;
};

const Form: React.FC<FormProps> = ({ addWorkouts, currentWorkout }) => {
  const [date, setDate] = React.useState(
    currentWorkout ? currentWorkout.date : ""
  );
  const [distance, setDistance] = React.useState(
    currentWorkout ? currentWorkout.distance.toString() : ""
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (date && distance) {
      addWorkouts(date, parseFloat(distance));
      setDistance("");
      setDate("");
    }
  };

  if (currentWorkout && currentWorkout.date !== date) {
    setDate(currentWorkout.date);
    setDistance(currentWorkout.distance.toString());
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__item">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form__item">
        <label htmlFor="distance">Пройдено км</label>
        <input
          type="text"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <button className="form__btn" type="submit">
        ok
      </button>
    </form>
  );
};

export default Form;
