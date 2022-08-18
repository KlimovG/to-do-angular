export interface Task {
  id: number,
  text: string,
  createdAt: Date,
}

export type TaskChange = Omit<Task, 'createdAt'>;
