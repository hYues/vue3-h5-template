// ============== 消息回复 ==============

/** 消息回复 */
export interface IResponse<T> {
  status: boolean;
  code: number;
  message: string;
  data: T;
}
