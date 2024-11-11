import React, { useState } from 'react'

export default function Form({ muscle, exercises, onClose, onSubmit }) {
  const [selectedExercise, setSelectedExercise] = useState('')
  const [exerciseData, setExerciseData] = useState({
    weight: '',
    reps: '',
    sets: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedExercise) return
    
    const exercise = exercises.find(ex => ex.name === selectedExercise)
    onSubmit(muscle, {
      ...exercise,
      weight: Number(exerciseData.weight),
      reps: Number(exerciseData.reps),
      sets: Number(exerciseData.sets),
      date: new Date().toISOString().split('T')[0]
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4">Update Exercise</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <select 
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Exercise</option>
            {exercises.map(exercise => (
              <option key={exercise.name} value={exercise.name}>
                {exercise.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Weight (kg)"
            value={exerciseData.weight}
            onChange={(e) => setExerciseData(prev => ({ ...prev, weight: e.target.value }))}
            className="border p-2 rounded"
            required
            min="0"
          />
          
          <input
            type="number"
            placeholder="Reps"
            value={exerciseData.reps}
            onChange={(e) => setExerciseData(prev => ({ ...prev, reps: e.target.value }))}
            className="border p-2 rounded"
            required
            min="1"
          />
          
          <input
            type="number"
            placeholder="Sets"
            value={exerciseData.sets}
            onChange={(e) => setExerciseData(prev => ({ ...prev, sets: e.target.value }))}
            className="border p-2 rounded"
            required
            min="1"
          />

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}