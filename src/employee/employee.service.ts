import { Injectable, Logger } from '@nestjs/common';

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
}
