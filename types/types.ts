export type ChatGroupType = {
  id: string;
  userId: string;
  title: string;
  passcode: string;
  createdAt: string;
};

export type GroupChatUserType = {
  id: number;
  name: string;
  groupId: string;
  createdAt: string;
};

export type MessageType = {
  id: string;
  message: string;
  groupId: string;
  name: string;
  createdAt: string;
};
