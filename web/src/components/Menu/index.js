import React from "react";

import "./index.scss";

const Menu = ({ style, onClick, children }) => {
    const childrenWithProps = React.Children.map(children, (child) => (
        React.cloneElement(child, { ...child.props, onClick })
    ));
    return (
        <ul className="menu" style={style}>
            {childrenWithProps}
        </ul>
    )
}

Menu.defaultProps = {
    style: {},
    onClick: () => { }
};

Menu.Item = ({ href, style, onClick, children }) => {

    const _onClick = (e) => {
        e.preventDefault();
        onClick(href);
    }

    return (
        <li
            className="menu-item"
        >
            <a
                href="#"    
                className="menu-item-link"
                style={style}
                onClick={_onClick}
            >{children}</a>
        </li>
    )
}

Menu.Item.defaultProps = {
    href: "/",
    style: {},
    onClick: () => { }
};

export default Menu;