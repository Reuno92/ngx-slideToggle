export class Articles {

    constructor(
        public id: number,
        public title: string,
        public intro: string,
        public author: string,
        public creationDate: string,
        public body: string,
        public modifyDate?: string,
        public subtitle?: string
    ) {}
}
