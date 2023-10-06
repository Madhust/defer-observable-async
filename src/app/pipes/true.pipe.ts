import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state',
  standalone: true
})
export class TruePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value === 'ENABLED';
  }

}
