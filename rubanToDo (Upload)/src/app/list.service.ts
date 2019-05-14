import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskAssignment } from './TaskAssignment';
import { TaskManager } from './taskManager';
import { Users } from './Users';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private taskUrl = 'http://localhost:8080/ruban'; // URL to web api
  constructor(private http: HttpClient) { }

  	getInformation(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfo/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }

    getOnlyUsers(): Observable<Users[]> {
        const url = this.taskUrl + '/getOnlyUsers';
        return this.http.get<Users[]>(url);
    }

    getAssignmentOfUser(name: string): Observable<TaskAssignment[]> {
        const url = this.taskUrl + '/getFromAssignedTasks/' + `${name}`;
        return this.http.get<TaskAssignment[]>(url);
    }

    getMyAssignment(name: string): Observable<TaskAssignment[]> {
        const url = this.taskUrl + '/getToAssignedTasks/' + `${name}`;
        return this.http.get<TaskAssignment[]>(url);
    }

  	changeStatus(task: TaskManager): Observable<any> {
    	return this.http.put(this.taskUrl + '/changeStatus', task, httpOptions);
    }

    acceptTheTask(task: TaskAssignment): Observable<any> {
        return this.http.put(this.taskUrl + '/acceptTask', task, httpOptions);
    }

    declineTheTask(task: TaskAssignment): Observable<any> {
        return this.http.put(this.taskUrl + '/declineTask', task, httpOptions);
    }

    changeStatusToIncomplete(task: TaskManager): Observable<any> {
      return this.http.put(this.taskUrl + '/changeStatusToIncomplete', task, httpOptions);
    }
    
    addTaskOfUser(task: TaskManager): Observable<TaskManager> {
        return this.http.post<TaskManager>(this.taskUrl + '/addTask' , task, httpOptions);
    }

    sendAssignments(task: TaskAssignment): Observable<TaskAssignment> {
        return this.http.post<TaskAssignment>(this.taskUrl + '/assignTask' , task, httpOptions);
    }

    addTaskOfUserWithDate(task: TaskManager): Observable<TaskManager> {
        return this.http.post<TaskManager>(this.taskUrl + '/addTaskWithTodayDate' , task, httpOptions);
    }

    deleteThisTask(task: TaskManager): Observable<TaskManager> {
    	const id = task.id;
    	const url = `${this.taskUrl}/${id}`;
    	return this.http.delete<TaskManager>(url,httpOptions);
    }

    deleteThisAssignment(task: TaskAssignment): Observable<TaskAssignment> {
        const id = task.id;
        const url = `${this.taskUrl + '/deleteAssignment'}/${id}`;
        return this.http.delete<TaskAssignment>(url,httpOptions);
    }

    getOne(id: number): Observable<TaskManager> {
      const url = this.taskUrl + '/oneTask/' + `${id}`;
      return this.http.get<TaskManager>(url);
    }

    editTask(task: TaskManager): Observable<any> {
      return this.http.put(this.taskUrl + '/edit', task, httpOptions);
    }

    getInformationByTaskNameAscending(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfoSortByTaskNameAscending/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }

    getInformationByTaskNameDescending(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfoSortByTaskNameDescending/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }

    getInformationByDateAscending(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfoSortByDateAscending/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }

    getInformationByDateDescending(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfoSortByDateDescending/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }

    getTodayTaskOfUser(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfoByTodayDate/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }

    getCompletedTask(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfoCompletedTask/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }

    getIncompletedTask(name: string): Observable<TaskManager[]> {
        const url = this.taskUrl + '/getOneUserInfoIncompletedTask/' + `${name}`;
        return this.http.get<TaskManager[]>(url);
    }
}