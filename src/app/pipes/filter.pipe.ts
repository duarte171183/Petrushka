import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);

      if (defaultFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, style) =>
                (x && new RegExp(filter[style], 'gi').test(item[style])) || filter[style] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((style) => {
            return new RegExp(filter[style], 'gi').test(item[style]) || filter[style] == "";
          });
        });
      }
    }
  }
}
