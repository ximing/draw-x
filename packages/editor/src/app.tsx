import './app.less';
import React from 'react';
import { Router } from 'umi';
import { ConfigProvider, Result, Button } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export function onRouteChange({ location, routes, action }: any) {
  console.log('onRouteChange', routes, action);
  // if (action === 'REPLACE') return;
  // getService<HistoryService>(HistoryService).location = location;
  // getService<HistoryService>(HistoryService).query = qs.parse(location.search);
  // if (location.pathname.startsWith('/team')) {
  //   const teamModuleService = getService<TeamModuleService>(TeamModuleService);
  //   if (teamModuleService.nodes.length === 0) {
  //     teamModuleService.init();
  //   }
  // }
}
class ErrorWrap extends React.Component<any> {
  state = {
    showError: false,
    msg: '',
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error);
    console.log(errorInfo);
    this.setState({
      showError: true,
      msg: errorInfo.componentStack,
    });
  }

  render() {
    return this.state.showError ? (
      <Result
        status="500"
        title="发生异常"
        subTitle={this.state.msg}
        extra={
          <Button type="primary" onClick={() => window.location.reload()}>
            重新加载
          </Button>
        }
      />
    ) : (
      this.props.children
    );
  }
}
export function rootContainer(container: any, { history }: any) {
  return (
    <div className="wrapper">
      <ErrorWrap>
        <ConfigProvider locale={zhCN}>
          <Router history={history}>
            <div className="content">
              {container}
            </div>
          </Router>
        </ConfigProvider>
      </ErrorWrap>
    </div>
  );
}
