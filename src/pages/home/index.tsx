import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Flex, Form, Input, Row, Space, message, notification } from 'antd';
import { downlaodImages } from '../../api';

type NotificationType = 'success' | 'info' | 'warning' | 'error';
let urls:any[] = [];
const Home: React.FC = () => {
    
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType, text = '') => {
        api[type]({
            message: '下载通知',
            description: text,
        });
    };
    const onFinish = ({ imgUrls }: any) => {
        const urlArr = imgUrls.map((item: any) => item.url);
        for (let url of urlArr) {
           if (url) {
                downlaodImages(url).then((res) => {
                    openNotificationWithIcon('success', `${res}-${url}-下载成功`)
                }).catch((error) => {
                    openNotificationWithIcon('error', `${error}-${url}-下载失败`)
                })
           }
        }
    };
    const onReset = () => {

    }
    return <>
    {contextHolder}
    <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        onReset={onReset}
        autoComplete="off"
    >
        <Form.List name="imgUrls">
            {(fields, { add, remove }) => (
                <>
                    <div style={{display: 'flex'}}>
                        <Form.Item style={{marginBottom: 0}}>
                            <Button style={{ width: 280, marginRight: 16 }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                添加
                            </Button>
                        </Form.Item>
                        <Form.Item  style={{marginBottom: 0}}>
                            <Button style={{ width: 140, marginRight: 16 }} type="primary" htmlType="submit">
                                下载全部图片
                            </Button>
                        </Form.Item>
                        <Form.Item  style={{marginBottom: 0}}>
                            <Button danger htmlType='reset'>
                                清空
                            </Button>
                        </Form.Item>
                    </div>
                    <Divider />
                    <div style={{ display: 'flex', flexWrap: 'wrap', overflowY: 'auto' }}>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8, marginRight: 16 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'url']}
                                >
                                    <Input placeholder="请输入下载图片网址" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                >
                                    <Button type="primary" htmlType="submit">
                                        下载图片
                                    </Button>
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                    </div>
                </>
            )}
        </Form.List>
    </Form>
    </>
};

export default Home;