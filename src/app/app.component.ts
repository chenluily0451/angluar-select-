import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	myForm: FormGroup

	selectData: any = [
        {
            id : 0,
            value : 'a0'
        },
        {
            id : 1,
            value : 'b1'
        }
    ]
    sex : any = 0
	constructor(private fb: FormBuilder){}
	ngOnInit(): void {
        this.myForm = this.fb.group({
            'sex' : [ this.selectData, Validators.required ]
        } )
    }
    getChildEvent(index: any){
        console.log(index)
        this.sex = index.id
    }
}