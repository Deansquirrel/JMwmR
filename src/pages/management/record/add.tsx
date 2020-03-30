import React from 'react';
import recordStyles from './record.less';

import locale from 'antd/es/date-picker/locale/zh_CN';

import moment from 'moment';

import { Form, Input, Button, DatePicker, Select, message } from 'antd';

const { Option, OptGroup } = Select;

import store from '@/data/store';
import { DefaultOpenKeys, DefaultSelectedKeys } from '@/data/menuReducer';

import { selectedKeysList, openKeysList } from '@/component/menu';
import { FormInstance } from 'antd/lib/form';

declare interface IRecord {
  date: string;
  money: number;
  category: number;
  remark: string;
}

const addRecord = async (record: IRecord): Promise<boolean> => {
  return fetch('/api/record/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: record.date,
      money: record.money,
      category: record.category,
      remark: record.remark == undefined ? '' : record.remark,
    }),
  })
    .then(response => response.json())
    .then(function(data) {
      if (data.code == 0) {
        if (data.msg != undefined) {
          message.info(data.msg);
        } else {
          message.info('success');
        }
        return true;
      } else {
        if (data.msg != undefined) {
          message.warn(data.msg);
        } else {
          message.warn('response has err without errmsg');
        }
        return false;
      }
    })
    .catch(function(e) {
      console.log(e);
      message.error(e);
      return false;
    });
};

const menuInit = () => {
  store.dispatch(DefaultOpenKeys([openKeysList.recordManagement]));
  store.dispatch(DefaultSelectedKeys([selectedKeysList.recordAdd]));
};

const layout = {
  labelCol: {
    xs: { span: 12 },
    sm: { span: 8 },
    md: { span: 6 },
    lg: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 16 },
    md: { span: 12 },
    lg: { span: 10 },
  },
};

const layoutBtn = {
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 16, offset: 8 },
    md: { span: 12, offset: 6 },
    lg: { span: 10, offset: 4 },
  },
};

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!',
  },
  number: {
    range: 'Must be between ${min} and ${max}',
  },
};

declare interface IState {
  isSubmiting: boolean;
  isLeave: boolean;
}

type State = Readonly<IState>;

class RecordAdd extends React.Component<{}, State> {
  unsubscribe: any;

  inputMoneyRef = React.createRef<Input>();
  inputRemarkRef = React.createRef<Input>();
  formRef = React.createRef<FormInstance>();

  componentDidMount() {
    menuInit();
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      isSubmiting: false,
      isLeave: false,
    };
  }

  onFinish = (values: any) => {
    this.setState({ isSubmiting: true });
    addRecord({
      date: values.record.date.format('YYYY-MM-DD'),
      money: values.record.money,
      category: values.record.category,
      remark: values.record.remark,
    })
      .then(flag => {
        console.log(flag);
        if (flag) {
          this.formRef.current?.resetFields();
        }
      })
      .catch(err => {
        console.log(err);
        message.error(err);
      })
      .finally(() => {
        if (!this.state.isLeave) {
          this.setState({ isSubmiting: false });
        }
      });
  };

  render() {
    const contextWith = 200;
    return (
      <div className={recordStyles.div_record_container}>
        <h1>记录登记</h1>
        <Form
          size={'large'}
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
          ref={this.formRef}
          initialValues={{
            record: {
              date: moment(),
              money: 0.0,
            },
          }}
          hideRequiredMark={true}
        >
          <Form.Item
            name={['record', 'date']}
            label="日 期"
            rules={[{ required: true }]}
          >
            <DatePicker
              format={'YYYY-MM-DD'}
              locale={locale}
              allowClear={false}
              inputReadOnly={true}
            />
          </Form.Item>
          <Form.Item
            name={['record', 'money']}
            label="金 额"
            rules={[
              {
                required: true,
                pattern: RegExp(
                  '^(([1-9][0-9]{0,14})|([0]{1})|(([0]\\.\\d{1,2}|[1-9][0-9]{0,14}\\.\\d{1,2})))$',
                ),
                message: '请输入金额',
              },
            ]}
          >
            <Input
              ref={this.inputMoneyRef}
              type="number"
              onFocus={() => {
                this.inputMoneyRef.current?.select();
              }}
              style={{ width: contextWith }}
            />
          </Form.Item>
          <Form.Item
            name={['record', 'category']}
            label="分类"
            rules={[{ required: true }]}
          >
            <Select style={{ width: contextWith }} placeholder={'请选择'}>
              <OptGroup label="Manager">
                <Option value={1}>Jack</Option>
                <Option value={2}>Lucy</Option>
              </OptGroup>
              <OptGroup label="Engineer">
                <Option value={3}>yiminghe</Option>
              </OptGroup>
            </Select>
          </Form.Item>
          <Form.Item name={['record', 'remark']} label="备注">
            <Input
              ref={this.inputRemarkRef}
              onFocus={() => this.inputRemarkRef.current?.select()}
              style={{ width: contextWith }}
              placeholder={'备注'}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layoutBtn.wrapperCol }}>
            <Button
              style={{ width: '5rem' }}
              type="primary"
              htmlType="submit"
              disabled={this.state.isSubmiting}
            >
              Submit
            </Button>
            <Button
              style={{ marginLeft: '2rem', width: '5rem' }}
              type="primary"
              htmlType="reset"
              onClick={() => {
                this.formRef.current?.resetFields();
              }}
              disabled={this.state.isSubmiting}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default RecordAdd;
