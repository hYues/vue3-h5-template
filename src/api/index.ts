import { post } from '@/libs/useAxios';
import type { IUserInfo } from 'types/app';
import type { UserLoginReq } from 'types/net';

/** 用户登录 */
export const USER_LOGIN = (data: UserLoginReq) => post<IUserInfo>(`/user/login`, data);

/** 用户认证 */
export const USER_AUTH = () => post(`/user/auth`, {});
