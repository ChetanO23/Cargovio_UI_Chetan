import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { CustomerAdmin } from './customer-admin';
@Injectable({
  providedIn: 'root'
})
export class CustomerAdminService {
  url = 'http://localhost:44317/Api/CustomerAdmin';
  constructor(private http: HttpClient) { }
  GetAllCustomerAdmin(): Observable<CustomerAdmin[]> {
    return this.http.get<CustomerAdmin[]>(this.url + '/AllCustomerAdminDetails');
  }
  GetCustomerAdminByID(ID: string): Observable<CustomerAdmin> {  
    return this.http.get<CustomerAdmin>(this.url + '/GetCustomerAdminDetailsByID/' + ID);  
  }  
  EditCustomerAdmin(customeradmin: CustomerAdmin): Observable<CustomerAdmin> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<CustomerAdmin>(this.url + '/EditCustomerAdminDetails/',  
    customeradmin, httpOptions);  
  }  
  ActivateCustomerAdmin(customeradmin: CustomerAdmin): Observable<CustomerAdmin> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<CustomerAdmin>(this.url + '/ActivateCustomerAdminDetails/',  
    customeradmin, httpOptions);  
  }  
  DeleteCustomerAdmin(ID: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteCustomerAdminDetails?id=' +ID,  
 httpOptions);  
  }  
}
