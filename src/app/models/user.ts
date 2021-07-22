export class User {
    constructor(
        public regNumber: string,
        public userName: string,
        public surname: string,
        public firstName: string,
        public nationalId: string,
        public email: string,
        public city: string,
        public countryId: number,
        public genderId: number,
        public categoryId: number
      ) {  }
}
