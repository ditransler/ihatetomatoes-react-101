import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="Overview">
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                        </Collapsible>
                        <Collapsible title="Features">
                            <p>Esse dolore eu magna ut voluptate velit enim nisi ipsum qui eiusmod aute. Deserunt incididunt occaecat consequat nisi aliqua laborum esse. Adipisicing officia fugiat labore incididunt elit deserunt laborum qui nulla. Reprehenderit consequat exercitation officia do labore occaecat id. Culpa nisi nostrud proident nisi eu. Tempor laborum non proident ad commodo fugiat occaecat sit sunt velit. Laborum amet adipisicing exercitation magna officia culpa exercitation consequat laboris ex in.</p>
                        </Collapsible>
                        <Collapsible title="Software">
                            <p>Esse commodo Lorem eiusmod non ipsum elit minim consectetur voluptate. Et incididunt aliquip Lorem ex labore proident. Eu pariatur est proident do est nostrud. Elit ea non aliquip elit et proident excepteur amet.</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
