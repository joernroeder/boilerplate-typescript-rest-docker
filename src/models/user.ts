export interface IPosition {
    x: number;
    y: number;
}

export class User {
    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.setPosition({ x, y });
    }

    public right(): void {
        this.x += 1;
    }

    public left(): void {
        this.x -= 1;
    }

    public up(): void {
        this.y += 1;
    }

    public down(): void {
        this.y -= 1;
    }

    public getPosition() : IPosition {
        return {
            x: this.x,
            y: this.y
        };
    }

    public setPosition(position: IPosition): void {
        const { x, y } = position;

        this.x = x;
        this.y = y;
    }

}
