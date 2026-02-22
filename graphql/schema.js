import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import UserQueries from './queries/userQueries'
import UserMutation from './mutations/userMutation'
import EmployeeQueries from './queries/employeeQueries'
import EmployeeMutation from './queries/employeeQueries'

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...EmployeeQueries,
        ...UserQueries
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...EmployeeMutation,
        ...UserMutation
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

export default schema;