export class User {
	constructor(
		public firstName: string = "",
		public lastName: string = "",
		public email: string = "",
		public password: string = "",
		public streetAddress: string = "",
		public unitApt: string = "",
		public city: string = "",
		public state: string = "",
		public lucky: boolean = null,
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}	
}
