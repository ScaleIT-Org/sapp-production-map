import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MetricConverterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'metricConverter',
})
export class MetricConverterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   * TODO: implement metric converter here
   */
  transform(value: string, ...args) {
    return value.toUpperCase();
  }
}
