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

  return (
    <div className="bg-white max-w-sm mx-auto p-4 lg:p-6 lg:max-w-3xl lg:ml-0 rounded-lg border-2 border-gray-300">
      <h3 className="text-lg font-semibold">Weekly Frontend Goals</h3>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter your goal"
      />
      <button onClick={addGoal}>Add to list</button>
      <ul>
        {goalsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyFrontendGoals;
