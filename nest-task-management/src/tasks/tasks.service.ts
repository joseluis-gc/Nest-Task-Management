import { Injectable } from '@nestjs/common';
import {Task, taskStatus} from "./task.model";
import {v4 as uuid } from "uuid";
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    private  tasks: Task[] = []

    getAllTasks() : Task[] {
        return this.tasks;
    }

    createTask(
        //title:string, description:string
        createTaskDTO:CreateTaskDto
    ) : Task {

        const {title,description } = createTaskDTO;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: taskStatus.OPEN,
        }
        this.tasks.push(task);
        return task;
    }



    getTaskById(id:string) : Task {

        return this.tasks.find((task) => task.id === id);
    }


}
