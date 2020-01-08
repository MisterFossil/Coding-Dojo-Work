import React, { Component } from 'react';

class MyNewComponent extends Component{
    render(){
        const {someText, children} = this.props;
        return(
            <div>
                <h1>
                    {someText}
                </h1>
                {children}
            </div>
        );
    }
}

export default MyNewComponent;