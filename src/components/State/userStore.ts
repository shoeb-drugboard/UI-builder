type User = {
  name: string;
  age: number;
  fullName: string;
  address: string;
};

type UserActions = {
  setAddress: (address: User["address"]) => void;
  setName: (name: User["name"]) => void;
  setAge: (age: User["age"]) => void;
  setFullName: (fullName: User["fullName"]) => void;
};

export type UserStore = User & UserActions;
