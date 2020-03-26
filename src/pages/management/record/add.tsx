import React, { ComponentClass, Component } from 'react';
import styles from './add.less';
import recordStyles from './record.less';

import locale from 'antd/es/date-picker/locale/zh_CN';

import moment from 'moment';

import { Form, Input, InputNumber, Button, DatePicker } from 'antd';

import store from '@/data/store';
import { DefaultOpenKeys, DefaultSelectedKeys } from '@/data/menuReducer';

import { selectedKeysList, openKeysList } from '@/component/menu';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';

const menuInit = () => {
    store.dispatch(DefaultOpenKeys([openKeysList.recordManagement]));
    store.dispatch(DefaultSelectedKeys([selectedKeysList.recordAdd]));
}

const layout = {
    labelCol: { xs: { span: 12 }, sm: { span: 8 }, md: { span: 6 }, lg: { span: 4 } },
    wrapperCol: { xs: { span: 12 }, sm: { span: 16 }, md: { span: 12 }, lg: { span: 10 } },
};

const layoutBtn = {
    wrapperCol: { xs: { span: 12 }, sm: { span: 16, offset: 8 }, md: { span: 12, offset: 6 }, lg: { span: 10, offset: 4 } },
}

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

const onFinish = (values: any) => {
    console.log(values);
    console.log(values.record.date.format('YYYY-MM-DD'));
    console.log(values.record.money);

};

class RecordAdd extends React.Component {

    recordDataRef = React.createRef<Component<PickerProps<moment.Moment>, any, any>>();

    componentDidMount() {
        menuInit();
    }

    render() {
        return (
            <div className={recordStyles.div_record_container}>
                <h1>记录登记</h1>
                <Form
                    size={"large"}
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                    initialValues={{
                        record: {
                            date: moment(),
                            money: 0
                        }
                    }}
                >
                    <Form.Item name={['record', 'date']} label="日 期" rules={[{ required: true }]}>
                        <DatePicker
                            defaultValue={moment()}
                            value={moment()}
                            format={"YYYY-MM-DD"}
                            locale={locale}
                            allowClear={false}
                            inputReadOnly={true} />
                    </Form.Item>
                    <Form.Item
                        name={['record', 'money']}
                        label="金 额"
                        rules={[{
                            required: true,
                            type: 'number',
                            min: 0,
                            max: 100000,
                        }]}>
                        <InputNumber
                            autoFocus={true}
                            style={{ width: "10rem" }}
                            precision={2}
                            defaultValue={0.00} />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="Website">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Introduction">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layoutBtn.wrapperCol }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        <Button style={{ marginLeft: "3rem" }} type="primary" htmlType="reset">
                            Reset
                            </Button>
                    </Form.Item>
                </Form>

            </div >
        )
    }
}

export default RecordAdd;