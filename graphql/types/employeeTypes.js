import {GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID, GraphQLNonNull, GraphQLEnumType} from 'graphql'

//const genderEnumType = new GraphQLEnumType({
//    name: 'genderEnum',
//    values: {
//      Male:{
//        value: "Male"
//      },
//      Female:{
//        value: "Female"
//      },
//      Other:{
//        value: "Other"
//      }
//    },
//});

const employeeType = new GraphQLObjectType({
    name: "employee",
    description: "An employee object",
    fields: ()=>({
        id:{type:GraphQLID},
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

export default employeeType;