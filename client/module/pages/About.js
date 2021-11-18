
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import './Main.less';

class About extends Component {


    kf = () => {
        const { item={} } = this.props.location.state || {};

        if(Object.keys(item).length < 0) {
            return;
        }
        // product 中的信息均可根据当前商品进行配置，下面以 title desc picture 等字段举例
        ysf('product', {
            show : 1,            // 1为打开， 其他参数为隐藏（包括非零元素）
            title : item.title,
            desc : item.desc,
            picture : item.pic, // 商品图片地址
            note : item.note,
            url : item.url,
            tags: [{
                "label": "打开七鱼官网",              // 按钮名字
                "url": "https://qi.163.com",        // 非必填，如果没有focusIframe字段，或者没有匹配到iframe，就以新窗口打开这个链接
                "focusIframe": "iframe名称",        // 定位到iframe的标识，以iframe的名称匹配
                "data": {"name": "ss","sex": "男"}, // 以postMessage形式发送的数据，数据格式不限
            }, {
                "label": "查询订单",
                "focusIframe": "订单",
                "data": {"orderId": "10000012","userName": "xxx"}
            }],
            success: function() {
                ysf.open();
            }
        });
    }

    render() {
        const { item={} } = this.props.location.state || {};

        return (
            <div className="m-about">
                <p className="tlt"><Link className="u-back" to="/">{"<"}</Link>{item.title}</p>
                <img className="u-pic" src={item.pic} />
                <p className="desc">{item.desc}</p>
                <div className="opt">
                    <span className="u-kf" onClick={this.kf}>客服</span>
                    <span className="u-buy">购买</span>
                    <span className="u-add">加入购物车</span>
                </div>
            </div>
        );
    }
}

export default withRouter(About)