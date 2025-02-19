type User = {
  name: string;
  email: string;
  fullName: string;
  address: string;
};

type UserActions = {
  setAddress: (address: User["address"]) => void;
  setName: (name: User["name"]) => void;
  setEmail: (email: User["email"]) => void;
  setFullName: (fullName: User["fullName"]) => void;
};

export type UserStore = User & UserActions;
