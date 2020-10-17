import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanReadableAction'
})
export class HumanReadableActionPipe implements PipeTransform {

  transform(value: string): unknown {
    return value == 'CREATE' ? 'Criar' : 'Editar';
  }

}
