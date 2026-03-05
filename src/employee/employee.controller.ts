import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './DTO/EmployeeDto';

@Controller('employee')
export class EmployeeController {
  private readonly logger = new Logger(EmployeeController.name);
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  getAllEmployees(): any[] {
    this.logger.log('Getting users from service layer');
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getOneEmployee(@Param('id', ParseIntPipe) id: number): object {
    this.logger.log('get one employee from the service layer');
    return this.employeeService.getOneEmployee(id);
  }

  @Post()
  createEmployee(@Body() employeeRequest: CreateEmployeeDto): object {
    this.logger.log('created employee came from service');
    return this.employeeService.createEmployee(employeeRequest);
  }
}
