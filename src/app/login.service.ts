import { HttpClient } from '@angular/common/http';
import { Injectable , Output,EventEmitter} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  

  @Output() disparadorDeUsuarios : EventEmitter<any> = new EventEmitter();
 
  constructor(private http: HttpClient) { 
      
  }

  login (){
  
  }
 
}
