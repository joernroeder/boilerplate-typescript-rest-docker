export class User {
    public x: number;
    public y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    public right(): void {
        this.x += 1;
    }

    public left(): void {
        this.x -= 1;
    }

}
