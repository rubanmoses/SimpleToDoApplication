export class TaskManager {
  id: number;
  username: string;
  taskname: string;
  taskDetails: string;
  date: string;
  status: string;
  constructor(id: number, username: string, taskname: string, taskDetails: string, date: string, status: string) {
  	this.id = id;
  	this.username = username;
  	this.taskname = taskname;
  	this.taskDetails = taskDetails;
  	this.date = date;
  	this.status = status;
  }
}