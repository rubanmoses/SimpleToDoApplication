import { Component, OnInit,  Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListService } from '../list.service';
import { TaskManager } from '../taskManager';
@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
	@Input() task: TaskManager;

  constructor(private route: ActivatedRoute,
    private listService: ListService,
    private location: Location) { }

  ngOnInit() {
  	this.getOneTask();
  }
  getOneTask(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.listService.getOne(id).subscribe(t => this.task = t);

  }
  goBack(): void {
        this.location.back();
   }
  save(): void {
  		this.listService.editTask(this.task).subscribe(() => this.goBack());
  	}

}