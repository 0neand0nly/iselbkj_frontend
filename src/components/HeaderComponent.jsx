import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://web-iselbkj-frontend-kvmh2mljph7x12.sel4.cloudtype.app/" className="navbar-brand"> BKJ Juliet SATE IV</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;