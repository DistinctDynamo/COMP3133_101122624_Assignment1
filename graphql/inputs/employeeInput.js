import {GraphQLInputObjectType, GraphQLString, GraphQLFloat, GraphQLNonNull} from 'graphql'

const employeeInput = new GraphQLInputObjectType({
    name: "employeeInput",
    fields: ()=>({
        first_name:{type:GraphQLNonNull(GraphQLString)},
        last_name:{type:GraphQLNonNull(GraphQLString)},
        email:{type:GraphQLNonNull(GraphQLString)},
        gender:{type:GraphQLNonNull(GraphQLString)},
        designation:{type:GraphQLNonNull(GraphQLString)},
        salary:{type:GraphQLNonNull(GraphQLFloat)},
        date_of_joining:{},
        department:{type:GraphQLNonNull(GraphQLString)},
        employee_photo:{GraphQLString},
        created_at:{},
        updated_at:{}
    })
});

export default employeeInput;