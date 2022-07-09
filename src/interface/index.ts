export interface User {
  name?: String;
  id?: String | null;
  isAdmin?: Boolean;
  avatar?: String;
}

export interface userNP {
  username: String;
  password: String;
}

export interface errorExpireToken {
  name: String;
  message: String;
  expiredAt: String;
}
export interface Message {
  content: String;
  receiver: User;
  sender: User;
}
