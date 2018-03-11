import React from "react";

const Container = ({ width, style, children }) => (
    <div
        style={{
            margin: "0 auto",
            padding: "30px 0",
            width,
            ...style
        }}
    >
        {children}
    </div>
)

Container.defaultProps = {
    width: "100%",
    style: {}
};

export default Container;