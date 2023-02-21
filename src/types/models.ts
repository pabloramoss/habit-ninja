/* Habit Tracker */
export interface DailyHabit {
  id: number;
  date: string;
  progress: number;
}

export interface HabitTracker {
  _id: string;
  name: string;
  habits: DailyHabit[];
}
