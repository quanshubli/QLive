/**
 * @description Logo 组件
 * 
 * @prop text - 文本，默认为 "Logo"
 * @prop fontSize - 字号，默认为 30
 * @prop color - 字体颜色，默认为 #333333
 */

import React from "react";

import "./index.scss";

const Logo = ({ text, fontSize, color }) => (
    <div
        className="logo"    
        style={{
            fontSize,
            color
        }}
    >{text}</div>
);

Logo.defaultProps = {
    text: "Logo",
    fontSize: 30,
    color: "#333"
};

export default Logo;