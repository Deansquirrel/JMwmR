export interface IResponseMessageSimple {
  code: number;
  msg: string;
}

export interface IResponseMessage<T> {
  code: number;
  msg: string;
  data: T | undefined;
}
