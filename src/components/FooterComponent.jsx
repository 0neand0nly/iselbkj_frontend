import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted" style={{float: "right"}}> All rights reseved to @0neand0nly </span>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;