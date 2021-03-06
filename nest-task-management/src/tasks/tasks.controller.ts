import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task} from "./task.model";
import {CreateTaskDto} from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService) {
    }

    @Get()
    getAllTasks() : Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(
        //@Body('title') title: string,
        //@Body('description') description: string,
        @Body() createTaskDTO:CreateTaskDto
    ) : Task {

        return this.tasksService.createTask(createTaskDTO);
    }

    @Get('/:id')
    getTaskById( @Param('id') id:string) : Task{
        return this.tasksService.getTaskById(id);
    }

}
