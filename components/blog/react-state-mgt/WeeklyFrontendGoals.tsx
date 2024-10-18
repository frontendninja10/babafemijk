"use client";

import React, { useState } from "react";

const WeeklyFrontendGoals = () => {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState<string[]>([]);

  const addGoal = () => {
    if (goal) {
      setGoalsList([...goalsList, goal]);
      setGoal("");
    }
  };

  const clearGoals = () => {
    setGoalsList([]);
  };

  return (
    <div className="bg-white max-w-sm mx-auto p-4 lg:p-6 lg:max-w-3xl lg:ml-0 rounded-lg border-2 border-gray-300">
      <h3 className="text-lg font-semibold mb-20">Weekly Frontend Goals</h3>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter your goal"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={addGoal}
        className="bg-slate-700 text-white px-4 py-2 mt-4 transform transition-transform duration-200 active:scale-95 mr-4"
      >
        Add to list
      </button>
      <button
        onClick={clearGoals}
        className="bg-red-500 text-white px-4 py-2 mt-4 transform transition-transform duration-200 active:scale-95"
      >
        Clear list
      </button>
      <ul>
        {goalsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyFrontendGoals;
