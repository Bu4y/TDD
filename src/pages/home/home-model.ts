export class dashModel {
    today: number;
    next7days: number;
    project: Array<project>;
}

export class project {
    name: string;
    accountno: number;
    parent: number;
    status: string;
}

export class userLoginModel {
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    tel: string;
    username: string;
}