import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) { }

  // GET functions

  getUsers(): any {
    return this.httpClient.get(BACKEND_URL + '/admin/users', httpOptions);
  }

  getGroups(): any {
    return this.httpClient.get(BACKEND_URL + '/group', httpOptions);
  }

  getChannels(): any {
    return this.httpClient.get(BACKEND_URL + '/channel', httpOptions);
  }

  getGroupMember(): any {
    return this.httpClient.get(BACKEND_URL + '/member/group', httpOptions);
  }

  getChannelMember(): any {
    return this.httpClient.get(BACKEND_URL + '/member/channel/', httpOptions);
  }

  // POST functions

  postUser(item:any): any {
    this.httpClient.post<any>(BACKEND_URL + '/admin/users', item, httpOptions)
  }

  postGroup(item:object): any {
    return this.httpClient.post<object>(BACKEND_URL + '/group', item, httpOptions);
  }
  postChannel(item:object): any {
    return this.httpClient.post<object>(BACKEND_URL + '/channel', item, httpOptions);
  }

  postGroupMember(item:object): any {
    return this.httpClient.post<object>(BACKEND_URL + '/member/group', item, httpOptions);
  }

  postChannelMember(item:object): any {
    return this.httpClient.post<object>(BACKEND_URL + '/member/channel', item, httpOptions);
  }

  // PUT functions

  putUser(item:object): any {
    return this.httpClient.put<object>(BACKEND_URL + '/admin/users', item,  httpOptions)
  }

  // DELETE functions

  deleteUser(id:string): any {
    return this.httpClient.delete(BACKEND_URL + '/admin/users/' + id + '/-', httpOptions);
  }

  deleteAllUsers(id:string): any {
    this.httpClient.delete(BACKEND_URL + '/admin/users/all/' + id, httpOptions)
  }

  deleteGroup(id:string): any {
    return this.httpClient.delete(BACKEND_URL + '/group/' + id, httpOptions);
  }

  deleteChannel(id:string): any {
    return this.httpClient.delete(BACKEND_URL + '/channel/' + id, httpOptions);
  }

  deleteGroupMember(user:string, gid:string): any {
    return this.httpClient.delete(BACKEND_URL + '/member/group/' + user + '/' + gid, httpOptions)
  }

  deleteChannelMember(user:string, cid:string): any {
    return this.httpClient.delete(BACKEND_URL + '/member/channel/' + user + '/' + cid, httpOptions);
  }
}
