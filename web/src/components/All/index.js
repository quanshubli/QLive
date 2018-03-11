import React, { Component } from "react";

import Container from "../Container";
import LiveItem from "../LiveItem";

import "./index.scss";

export default class All extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container width={1100}>
                <p className="all-title">全部直播</p>    
                <ul className="live-list">
                    <li><LiveItem style={{ margin: "0 auto" }} /></li>
                    <li><LiveItem style={{ margin: "0 auto" }} /></li>
                    <li><LiveItem style={{ margin: "0 auto" }} /></li>
                    <li><LiveItem style={{ margin: "0 auto" }} /></li>
                    <li><LiveItem style={{ margin: "0 auto" }} /></li>
                </ul>
            </Container>
        )
    }
}