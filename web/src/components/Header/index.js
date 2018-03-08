import React from "react";

import "./index.scss";

const Header = (props) => (
    <div className="header">
        {props.children}
    </div>
);

export default Header;