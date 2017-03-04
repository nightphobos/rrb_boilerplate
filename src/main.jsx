import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';

class App extends React.Component {

    render() {
        return <Row>
            <Col  xs={8} xsOffset={2} >
                <h1>
                    Hello World! Current counter is {this.props.counter}
                </h1>
                <Button onClick={this.props.count}>+</Button>
            </Col>
        </Row>
    }
}

export default App;

