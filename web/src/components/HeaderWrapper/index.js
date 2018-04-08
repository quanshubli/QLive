import React from "react";

import "./index.scss";

const HeaderWrapper = (props) => (
    <div className="header">
        {props.children}
    </div>
);

export default HeaderWrapper;