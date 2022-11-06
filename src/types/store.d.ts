declare module "redux-store" {
  interface PERSON {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: "Male" | "Female";
    profilePicture: string;
  }

  interface GROUP {
    id: string;
    first_name: string;
    profilePicture: string;
    members: number;
  }

  export type ACCOUNT = PERSON | GROUP;

  export interface SELECTED_ACCOUNTS extends ACCOUNT{
    permission:string;
  }
}
