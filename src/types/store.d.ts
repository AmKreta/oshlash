declare module 'redux-store' {
    
    interface PERSON {
        name: string,
        profilePicture: string,
        email: string,
        id: string,
    }

    interface GROUP extends Omit<PERSON, 'email'> {
        members: { [id: string]: PERSON };
    }

    export type ACCOUNT = PERSON | GROUP;
}