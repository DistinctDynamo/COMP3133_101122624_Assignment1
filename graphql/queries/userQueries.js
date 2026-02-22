import {GraphQLID, GraphQLNonNull} from 'graphql';

import User from '../../models/Users'
import UserType from '../types/userTypes'

const userQueries = {
    login:{
       type: UserType,
       args: { password: { type: new GraphQLNonNull(GraphQLID) } },
       resolve: async (_, { password }) => await User.find({ password })
    }
}

export default userQueries;