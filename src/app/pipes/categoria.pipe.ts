import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../classes/produto';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(categorias: Produto[], select: string): Produto[] {
    if(!select){
      return categorias;
    } else {
      return categorias.filter(c => c.categoria === select);
    }
  }

}
