import React from "react";

import "./index.scss";

const LiveItem = ({ style }) => {
    return (
        <div
            className="live-item"
            style={{ width: 240, minHeight: 200, ...style }}
        >
            <img src="assets/image/mclaren.jpg" width="100%" height="135" />
            <div className="info">
                <div className="line">
                    <p>标题标题标题标题标题标题</p>
                    <span>绝地求生</span>
                </div>
                <div className="line">
                    <p>谁谁谁</p>
                    <span>叶航旗</span>
                </div>
            </div>
        </div>
    )
}

LiveItem.defaultProps = {
    style: {}
}

export default LiveItem;