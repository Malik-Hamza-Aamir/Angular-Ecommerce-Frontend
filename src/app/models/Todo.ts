export class Todo {
    id: number;
    content: string;
    completed: boolean;

    constructor() {
        this.id = 0;
        this.content = '';
        this.completed = false;
    }
}
