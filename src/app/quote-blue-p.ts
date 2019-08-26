export class QuoteBlueP {
    public showDescription: boolean;
    public upVotes: number;
    public downVotes: number;
    // tslint:disable-next-line: max-line-length
    constructor(public id: number, public name: string, public authorName: string,  public description: string , public completeDate: Date) {
      this.showDescription = false;
      this.upVotes = 0;
      this.downVotes = 0;
    }
}
