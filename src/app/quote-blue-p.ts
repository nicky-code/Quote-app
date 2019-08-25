export class QuoteBlueP {
    public showDescription: boolean;
    // tslint:disable-next-line: max-line-length
    constructor(public id: number, public name: string, public authorName: string, public publishedName: string, public completeDate: Date) {
      this.showDescription = false;
    }
}
