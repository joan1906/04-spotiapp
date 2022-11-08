import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSatanizer: DomSanitizer) {}

  transform(value: any): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSatanizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
