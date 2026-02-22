import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';

import User from '../../models/Users.js'
import UserType from '../types/userTypes.js'

const userQueries = {
    login:{
       type: UserType,
       args: { password: { type: new GraphQLNonNull(GraphQLString) } },
       resolve: async (_, { password }) => await User.findOne( {password} )
    }
}

export default userQueries;