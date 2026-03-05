import { Injectable, Logger } from '@nestjs/common';
import { CreateEmployeeDto } from './DTO/EmployeeDto';

@Injectable()
export class EmployeeService {
  private readonly logger = new Logger(EmployeeService.name);

  getAllEmployees(): any[] {
    this.logger.log('Employee fetching started');
    return [];
  }

  getOneEmployee(id: number): object {
    return {
      employeeId: id,
      userDate: '',
    };
  }

  createEmployee(employeeData: CreateEmployeeDto): object {
    this.logger.log('creating started of employee');
    return employeeData;
  }
}
