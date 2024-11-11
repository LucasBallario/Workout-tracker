import React, { useState, useEffect } from 'react';
import { exerciseByMuscle } from './exerciseData';
import Home from './components/Home';
import ExerciseList from './components/ExerciseList';
import Form from './components/Form';

function App() {
  const [selected, setSelected] = useState(null);
  const [exercises, setExercises] = useState(() => {
    const storedExercises = localStorage.getItem('exercises');
    return storedExercises
      ? JSON.parse(storedExercises)
      : {
          arms: exerciseByMuscle.arms.map(name => ({
            name,
            weight: 0,
            reps: 0,
            sets: 0,
            date: new Date().toISOString().split('T')[0]
          })),
          back: exerciseByMuscle.back.map(name => ({
            name,
            weight: 0,
            reps: 0,
            sets: 0,
            date: new Date().toISOString().split('T')[0]
          })),
          abs: exerciseByMuscle.abs.map(name => ({
            name,
            weight: 0,
            reps: 0,
            sets: 0,
            date: new Date().toISOString().split('T')[0]
          })),
          chest: exerciseByMuscle.chest.map(name => ({
            name,
            weight: 0,
            reps: 0,
            sets: 0,
            date: new Date().toISOString().split('T')[0]
          })),
          legs: exerciseByMuscle.legs.map(name => ({
            name,
            weight: 0,
            reps: 0,
            sets: 0,
            date: new Date().toISOString().split('T')[0]
          }))
        };
  });

  useEffect(() => {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }, [exercises]);

  const handleMuscleClick = (muscle) => {
    setSelected(muscle);
  };

  const handleFormClose = () => {
    setSelected(null);
  };

  const handleFormSubmit = (muscle, newData) => {
    setExercises(prevExercises => ({
      ...prevExercises,
      [muscle]: prevExercises[muscle].map(exercise =>
        exercise.name === newData.name
          ? { ...newData, maxWeight: Math.max(newData.weight, exercise.maxWeight || 0) }
          : exercise
      )
    }));
  };

  const updateMaxWeight = (muscle, exerciseName, weight) => {
    setExercises(prevExercises => ({
      ...prevExercises,
      [muscle]: prevExercises[muscle].map(exercise =>
        exercise.name === exerciseName
          ? { ...exercise, maxWeight: Math.max(exercise.maxWeight || 0, weight) }
          : exercise
      )
    }));
  };

  return (
    <div>
      <Home />
      <ExerciseList
        exercises={exercises}
        onMuscleClick={handleMuscleClick}
        updateMaxWeight={updateMaxWeight}
      />
      {selected && (
        <Form
          muscle={selected}
          exercises={exercises[selected]}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default App;