import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador',
  pure: false
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, arg: any ){


    const resultPosts = [];

    if(!arg){
      return value;
    }
    for (const post of value) {

      if (post.value.indexOf(arg) > -1 || post.code.indexOf(arg.toUpperCase())  > -1) {

          resultPosts.push(post);
      }
    }

    return resultPosts;
  }
}
