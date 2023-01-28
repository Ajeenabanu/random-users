import { Pipe, PipeTransform } from '@angular/core';
import { MyUsers } from 'src/model/MyUsers';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users:any [], searchkey:string ,propName:string ): any [] {
    const result:any=[]
    if(!users || searchkey=='' || propName==''){
    return users
  }
  users.forEach((MyUsers:any) => {
    if(MyUsers[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
      result.push(MyUsers)
    }
  });
return result;}
}