
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { configUsr } from './config';
import { shopList } from '../constants';

import './Main.less';

export default class Main extends Component {
    componentDidMount() {
        // 上报用户信息
        configUsr();
    }

    render() {
        return (
            <div className="m-main">
                <p className="tlt">
                    <img className="u-img" src="https://ysf.qiyukf.net/operation/1d618cc5046ea502010253397c79e675" /> 网易七鱼访客端-H5接入demo
                </p>
                <div className="cont">
                {
                    shopList.map((item, idx) => {
                        return (
                            <div className="u-item" key={idx}>
                                <p className="u-tlt">{item.title}</p>
                                <img className="u-pic" src={item.pic} />
                                <p className="desc">{item.desc}</p>
                                <Link to={{pathname: "/about", state: {item: item}}} className="u-btn">查看详情</Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}