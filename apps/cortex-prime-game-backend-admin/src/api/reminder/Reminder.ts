export type Reminder = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  seconds: string | null;
  shouldNotify: string | null;
  shouldPause: string | null;
  updatedAt: Date;
};
