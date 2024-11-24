export type UserStore = {
  userName: string;
  setUserName: (user: string) => void;
};

export type User = { userName: string };

export type MessageBody = {
  action: string;
  type: string;
  body: Body;
};

export type Body = {
  type: string;
  solidColor?: string;
  pattern?: string;
  pin?: number;
  temperature?: number;
  humidity?: number;
};

export type StatusMessage = {
  action: string;
  type: string;
  body: string;
};
