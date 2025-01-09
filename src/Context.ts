import React from 'react';
import { UserEntity } from './controller/UserAuth/UserEntity';
const AppContext = React.createContext<{
    contextAccessToken: string,
    contextUserEntity: UserEntity | null,
    setContextUserEntity: (val: UserEntity | null) => void,
}>({
    contextAccessToken: '', 
    contextUserEntity: null,
    setContextUserEntity: (val: UserEntity | null) => void {},
});
export default AppContext;