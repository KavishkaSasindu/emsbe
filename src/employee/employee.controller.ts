import { Controller, Get, Logger, Param, ParseIntPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';

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
    return this.employeeService.getOneEmployee(id);
  }
}
