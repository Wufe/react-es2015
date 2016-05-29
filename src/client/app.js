import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

@Radium
class App extends React.Component{

    render(){
        return (
            <h1>
                App
            </h1>
        );
    }

}

ReactDOM.render(
    <App />, document.getElementById( "wrapper" )
);
