export class QuoteBlueP {
    showDescription: boolean;
    constructor(public id: number, public name: string, public authorName: string, public publishedName: string){
      this.showDescription = false;
    }
}
