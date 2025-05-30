export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;
export const API_URL = `${BASE_URL}/api`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const CHAT_GROUP_URL = API_URL + "/chatGroup";
export const CHAT_GROUP_USERS = API_URL + "/chatgroup-users"
export const CHATS_URL = API_URL+"/chats"