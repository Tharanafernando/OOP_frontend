import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function GreaterThanZero():ValidatorFn{
  // @ts-ignore
  return (control:AbstractControl):ValidationErrors | null =>{
    const value = control.value
    if(value<0){
      alert("Value should be greater than 0")
    }
  };
}
