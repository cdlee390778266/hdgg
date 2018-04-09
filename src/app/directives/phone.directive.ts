import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isValid = RegExp("^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$").test(control.value);
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
