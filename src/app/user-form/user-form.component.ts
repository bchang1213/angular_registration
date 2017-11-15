import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from './../user';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class UserFormComponent implements OnInit {
	user = new User();

	constructor() {
		
	}

	ngOnInit() {

	}

	function onSubmit(){
		console.log(this.newUser);
	}

}
