export class newprojectModel {
    name: string;
    masterplan: plan = new plan();
    parent: string;
    teacher: Array<teacher>;
    startdate: Date;
}

export class teacher {
    username: string;
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    tel: string;
    profileImageURL: string;
}

export class plan {
    name: string;
    amountdate: Array<amountdate>;
}

export class amountdate {
    date: string;
    title: string;
}

export class getDataNewProject {
    plans: Array<plans>;
    parent: Array<parent>;
}

export class plans {
    name: string;
    task: Array<tasks>;
    totaldate: number;
}

export class tasks {
    taskno: number;
    date: number;
    title: string;
}

export class parent {
    name: string;
    accountno: string;
    parent: string;
    status: string;
}