import React from 'react';
import { DownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Alert, Collapse, CollapseProps, FloatButton, List, Progress, Typography } from 'antd';

interface IProps {
  data: any[],
  activeKey: any[],
  onChangeActiveKey: (activeKey: string) => void
}

const FloatCollapse = (props: IProps) => {
  const { data, activeKey = [], onChangeActiveKey } = props;
  const CollapseMain = () => {
    return <List
      // header={<div>Header</div>}
      // footer={<div>Footer</div>}
      locale={{ emptyText: '暂无下载任务' }}
      bordered
      dataSource={data}
      style={{ border: 'none', padding: 0 }}
      renderItem={(item) => {
        const progress = item.currentProgress / item.totalProgress * 100
        let status = 'normal'
        if (item.status === 'progress') {
          status = 'active'
        } else if (item.status === 'success') {
          status = 'success'
        } else {
          status = 'exception'
        }
        return <List.Item style={{ padding: '12px 0' }}>
          {item.name}
          {!item.currentProgress && !item.totalProgress ? <Alert type="error" style={{ marginTop: 12 }} message={item.msg} banner /> : <Progress percent={Math.floor(progress)} size="small" status={status as any} showInfo />}
        </List.Item>
      }}
    />
  }
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '下载面板',
      children: CollapseMain(),
    },
  ];
  return <>
    <div style={{ position: 'fixed', right: 60, bottom: 100, background: '#ffffff' }}><Collapse style={{ width: 500 }} items={items} activeKey={activeKey} onChange={(key: any) => {
      onChangeActiveKey?.(key)
    }}></Collapse></div>
    {/* <FloatButton description={<div><Collapse items={items} defaultActiveKey={['1']}></Collapse></div>} onChange={onChange} icon={<DownloadOutlined />} type="primary" style={{ right: 24 }} /> */}
  </>
}

export default FloatCollapse;