/*
* This file is used to define the structure of Recipe, how it looks and what attributes it should have.
*/
export class Recipe {
    public name : string;
    public description : string;
    public imagePath : string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
    
}