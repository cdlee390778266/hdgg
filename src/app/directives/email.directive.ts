import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isValid = RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$").test(control.value);
    return isValid ? null : {'email': {value: control.value}};
  };
}

@Directive({
  selector: '[hdEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true}]
})
export class EmailDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} {
    return emailValidator()(control);                      
  }

}
