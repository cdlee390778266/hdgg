import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isValid = RegExp("^1[34578]\d{9}$").test(control.value);
    return isValid ? null : {'phone': {value: control.value}};
  };
}

@Directive({
  selector: '[hdPhone]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true}]
})
export class PhoneDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} {
    return phoneValidator()(control);                      
  }

}
