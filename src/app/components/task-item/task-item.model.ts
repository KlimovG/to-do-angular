export interface TaskItem {
  id: number,
  text: string,
  createdAt: Date,
}

export type TaskChange = Omit<TaskItem, 'createdAt'>;
