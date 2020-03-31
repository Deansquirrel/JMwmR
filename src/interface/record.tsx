export interface IRecord {
  date: string;
  money: number;
  category: number;
  remark: string;
}

export interface IResponseData {
  code: number;
  msg: string;
}

export class RecordHelper {
  add(
    data: IRecord,
    handlerResponse: (resp: IResponseData) => any,
    finallyFunc?: () => any,
    handlerErr?: (err: any) => any,
  ): void {
    fetch('/api/record/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: data.date,
        money: data.money,
        category: data.category,
        remark: data.remark == undefined ? '' : data.remark,
      }),
    })
      .then(response => response.json())
      .then(function(data: IResponseData) {
        handlerResponse(data);
      })
      .catch(function(e) {
        if (handlerErr != undefined) {
          handlerErr(e);
        } else {
          console.error(e);
        }
      })
      .finally(() => {
        if (finallyFunc != undefined) {
          finallyFunc();
        }
      });
  }
}
