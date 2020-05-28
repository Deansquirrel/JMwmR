export interface IResponseMessage<T> {
  code: number;
  msg: string;
  data: T | undefined;
}
