import React from "react";

type FormProps = {
  addWorkouts: (date: string, distance: number) => void;
};

const Form: React.FC<FormProps> = ({ addWorkouts }) => {
  const [date, setDate] = React.useState("");
  const [distance, setDistance] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (date && distance) {
      addWorkouts(date, parseFloat(distance));
      setDistance("");
    }
  };

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
