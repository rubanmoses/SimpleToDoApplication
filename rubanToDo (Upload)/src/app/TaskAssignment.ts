export class TaskAssignment{
	id: number;
	fromuser: string;
	touser: string;
	task: string;
	taskDetails: string;
	status: string;
	constructor(id: number, fromuser: string, touser: string, task: string, taskDetails: string, status: string) {
		this.id = id;
	  	this.fromuser = fromuser;
	  	this.touser = touser;
	  	this.task = task;
	  	this.taskDetails = taskDetails;
	  	this.status = status;
	}
}