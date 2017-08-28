import { Component, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
    selector: 'app-select',
    templateUrl: './app-select.component.html',
    styleUrls: ['./app-select.css'],
    providers   : [
        {
            provide     : NG_VALUE_ACCESSOR,
            useExisting : forwardRef(() => AppSelectComponent),
            multi       : true
        }
    ]
})
export class AppSelectComponent implements ControlValueAccessor{

	isHideSelect: boolean = true
	defaultSelectValue: string = ''
    dataSource: any = ''
    @Input('defaultValue') defaultValue: any = ''
    @Input('label') label: any = ''
    @Output() childEvent = new EventEmitter<any>()

    onChange: any = ():any => { return undefined }
    onTouched: any = ():any => { return undefined }
    constructor() {}

    displaySelect(){
        this.isHideSelect = !this.isHideSelect
    }

    selectValue(val: any) {
        this.isHideSelect = true
        this.defaultSelectValue = val.value
        this.childEvent.emit(val);
    }

    set value(val: any) {
        this.onChange(val)
        this.onTouched()
        console.log('setValue:' + val)
        this.dataSource = val
        this.dataSource.map((i: any) => {
            if (i.id === this.defaultValue) {
                this.defaultSelectValue = this.dataSource[this.defaultValue].value
            }
        })

    }

    get value() {
        return this.value
    }

    registerOnChange(fn: any): void {
        this.onChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn
    }

    writeValue(value: any) {
        this.value = value
    }


 }