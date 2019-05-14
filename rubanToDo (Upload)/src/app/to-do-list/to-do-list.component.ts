import { Component, OnInit } from '@angular/core';
import { TaskManager } from '../taskManager';
import { TaskAssignment } from '../TaskAssignment';
import { Users } from '../Users';
import { ListService } from '../list.service';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

	flag: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;
  flag5: boolean = false;
  flag6: boolean = false;
  //message: string = '';
	myTask: TaskManager[] = [];
  myAssign: TaskAssignment[] = [];
  // userNameArray: string[] = [];
  userNameArray: Users[] = [];

	//size;
  	constructor(private toDoService: ListService) { }

  	ngOnInit() {
      this.flushArray();
      this.getUsers();
      // this.userNameArray = ['ruban','moses','george'];
  		//this.size = this.myTask.length;

  	}

    callFunctionByNumber(id: string, name: string): void {
      console.log('Inside Call Function By Number');
      console.log('The id value  ' +id);
      console.log('Name value  ' +name);
      // if(id ===1)
      // {
      //   console.log("inside id 1 equals");
      //   this.fetchInformationByTaskNameAscending(name);
      // }
      // if(id ===2)
      // {
      //   console.log("inside id 2 equals");
      //   this.fetchInformationByTaskNameDescending(name);
      // }
      // if(id ===3)
      // {
      //   console.log("inside id 3 equals");
      //   this.fetchInformationByDateAscending(name);
      // }
      // if(id ===4)
      // {
      //   console.log("inside id 4 equals");
      //   this.fetchInformationByDateDecending(name);
      // }
      // else{
      //   return;
      // }
      console.log(typeof(id));
      switch(id) { 
        case '1':
          console.log("inside id 1 equals");
          this.fetchInformationByTaskNameAscending(name);
          break;
        case '2':
          console.log("inside id 2 equals");
          this.fetchInformationByTaskNameDescending(name);
          break; 
        case '3':
          console.log("inside id 3 equals");
          this.fetchInformationByDateAscending(name);
          break; 
        case '4':
          console.log("inside id 4 equals");
          this.fetchInformationByDateDecending(name);
          break;  
        default:
          console.log("Default");
          this.fetchInformation(name);
          return; 
      }
    }

  fetchInformation(name: string): void {
  		console.log('Inside fetch Information method');
    //   this.flag4 = false;
    //   this.flag5 = false;
  		// this.flag = true;
    //   this.flag2 = false;
      this.flushArray();
      this.getUsers();
      this.switchWork();
      //this.updateSize();
      this.toDoService.getInformation(name).subscribe(myTasks => this.myTask = myTasks);
        //this.size = this.myTask.length;
        // if(this.size ===0)
        // {
        // 	this.fetchInformation(name);
        // }
      //this.updateSize();
  		//console.log('The value of size ' +this.size);
   }
   
   myAssignedTask(name: string): void {
      console.log('Inside myAssignedTask mehtod');
      this.flag4 = true;
      this.flag5 = false;
      this.flag6 = false;
      this.toDoService.getAssignmentOfUser(name).subscribe(tasks => this.myAssign = tasks);
   }

   getUsers(): void {
      this.toDoService.getOnlyUsers().subscribe(user => this.userNameArray = user);
   }

   tasksAssignedToMe(name: string): void {
      console.log('Inside myAssignedTask mehtod');
      this.flag5 = true;
      this.flag4 = false;
      this.flag6 = false;
      this.toDoService.getMyAssignment(name).subscribe(tasks => this.myAssign = tasks);
   }

   fetchTodayTask(name: string): void {
     // this.flag4 = false;
     // this.flag5 = false;
     //   //this.size = this.myTask.length;
     // this.flag = true;
     // this.flag2 = false;
     this.switchWork();
     this.toDoService.getTodayTaskOfUser(name).subscribe(myTasks => this.myTask = myTasks);
   }

   fetchCompletedTask(name: string): void {
       //this.size = this.myTask.length;
      // this.flag4 = false;
      // this.flag5 = false;
      // this.flag = true;
      // this.flag2 = false;
      this.switchWork();
      this.toDoService.getCompletedTask(name).subscribe(myTasks => this.myTask = myTasks);
   }

   fetchIncompleteTask(name: string): void {
       //this.size = this.myTask.length;
      // this.flag4 = false;
      // this.flag5 = false;
      // this.flag = true;
      // this.flag2 = false;
      this.switchWork();
      this.toDoService.getIncompletedTask(name).subscribe(myTasks => this.myTask = myTasks);
   }

   fetchInformationByTaskNameAscending(name: string): void {
     //  this.flag4 = false;
     //  this.flag5 = false;
   		// //this.size = this.myTask.length;
   		// this.flag = true;
     //  this.flag2 = false;
      this.switchWork();
      this.toDoService.getInformationByTaskNameAscending(name).subscribe(myTasks => this.myTask = myTasks);
   }

   fetchInformationByTaskNameDescending(name: string): void {
   		//this.size = this.myTask.length;
   		// this.flag = true;
     //  this.flag4 = false;
     //  this.flag5 = false;
     //  this.flag2 = false;
      this.switchWork();
      this.toDoService.getInformationByTaskNameDescending(name).subscribe(myTasks => this.myTask = myTasks);
   }

   fetchInformationByDateAscending(name: string): void {
   		//this.size = this.myTask.length;
   		// this.flag = true;
     //  this.flag2 = false;
     //  this.flag4 = false;
     //  this.flag5 = false;
      this.switchWork();
      this.toDoService.getInformationByDateAscending(name).subscribe(myTasks => this.myTask = myTasks);
   }

   fetchInformationByDateDecending(name: string): void {
   		//this.size = this.myTask.length;
   		// this.flag = true;
     //  this.flag2 = false;
     //  this.flag4 = false;
     //  this.flag5 = false;
      this.switchWork();
      this.toDoService.getInformationByDateDescending(name).subscribe(myTasks => this.myTask = myTasks);
   }

   statusUpdater(task: TaskManager): void {
   		//this.myTask = this.myTask.filter(t => t!== task)
   		this.toDoService.changeStatus(task).subscribe(myTasks => this.myTask = myTasks);
   }

   acceptTask(task: TaskAssignment): void {
       //this.myTask = this.myTask.filter(t => t!== task)
       this.toDoService.acceptTheTask(task).subscribe(myTasks => this.myAssign = myTasks);
   }

   declineTask(task: TaskAssignment): void {
       //this.myTask = this.myTask.filter(t => t!== task)
       this.toDoService.declineTheTask(task).subscribe(myTasks => this.myAssign = myTasks);
   }

   statusUpdaterIncomplete(task: TaskManager): void {
       //this.myTask = this.myTask.filter(t => t!== task)
       this.toDoService.changeStatusToIncomplete(task).subscribe(myTasks => this.myTask = myTasks);
   }

   addTask(id: number, username: string, taskname: string, taskDetails: string, date: string): void {
   //	this.size = this.myTask.length;
   	status = 'not';
   	username = username.trim();
   	taskname = taskname.trim();
   	taskDetails = taskDetails.trim();
   	date = date.trim();
    if (!taskname && !taskDetails) { return; }
   	this.toDoService.addTaskOfUser({id, username, taskname, taskDetails, date, status} as TaskManager)
    .subscribe(task => {
        this.myTask.push(task);
    });
    this.flag2 = false;
   }
   addAssignment(id: number, fromuser: string, touser: string, task: string, taskDetails: string): void {
     this.flag6 = true;
     fromuser = fromuser.trim();
     touser = touser.trim();
     task = task.trim();
     taskDetails = taskDetails.trim();
     status = 'not';
     this.toDoService.sendAssignments({id, fromuser, touser, task, taskDetails, status} as TaskAssignment).subscribe();
   }

   addTodayTask(id: number, username: string, taskname: string, taskDetails: string, date: string): void {
   //  this.size = this.myTask.length;
     status = 'not';
     date = 'not';
     username = username.trim();
     taskname = taskname.trim();
     taskDetails = taskDetails.trim();
     date = date.trim();
     if (!taskname && !taskDetails) { return; }
     this.toDoService.addTaskOfUserWithDate({id, username, taskname, taskDetails, date, status} as TaskManager)
    .subscribe(task => {
        this.myTask.push(task);
    });
    this.flag2 = false;
   }

   displayAlertMessage(): void {
   	alert("You are deleting this task.. Are you Sure?");
   }

    delete(task: TaskManager): void {
  		this.myTask = this.myTask.filter(t => t !== task);
  		//this.size = this.myTask.length;
  		this.toDoService.deleteThisTask(task).subscribe();
	  }
    deleteAssignment(task: TaskAssignment): void {
      this.myAssign = this.myAssign.filter(t => t !== task);
      //this.size = this.myTask.length;
      this.toDoService.deleteThisAssignment(task).subscribe();
    }
	  updateBooleanFlage2(): void {
    this.flag2 = true;
	}
    updateBooleanFlage3(): void {
    this.flag3 = true;
  }
  switchWork()
  {
      this.flag = true;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.flag5 = false;
      this.flag6 = false;
  }
  flushArray() {
    while(this.userNameArray.length > 0) 
    {
        this.userNameArray.pop();
    }
  }
}