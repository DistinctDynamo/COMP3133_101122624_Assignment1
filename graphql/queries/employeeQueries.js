import {GraphQLList, GraphQLID, GraphQLNonNull} from 'graphql';

import EmployeeType from '../types/employeeTypes'
import Employee from '../../models/Employee'


const employeeQueries = {
  employees: {
    type: new GraphQLList(EmployeeType),
    resolve: async () => await Employee.find()
  },
  employee: {
    type: EmployeeType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (_, { id }) => await Employee.findById(id)
  },
  EmployeesByDepartment: {
    type: new GraphQLList(EmployeeType),
    args: { department: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (_, { department }) => await Employee.find({ department })
  }
};

export default employeeQueries;
