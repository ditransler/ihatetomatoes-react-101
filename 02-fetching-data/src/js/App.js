import React from 'react';
import image from '../images/cloud-upload-download-data-transfer.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.fetchData = this.fetchData.bind(this);

        this.state = {
            isLoading: true,
            contacts: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
        .then((response) => response.json())
        .then((data) => data.results.map((user) => (
            {
                name: `${user.name.first} ${user.name.last}`,
                username: `${user.login.username}`,
                email: `${user.email}`,
                location: `${user.location.street}, ${user.location.city}`
            }
        )))
        .then((contacts) => this.setState({
            contacts,
            isLoading: false
        }))
        .catch((error) => console.log('parsing failed', error));
    }

    render() {
        const {isLoading, contacts} = this.state;

        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Fetching Data <button className="btn btn-sm btn-danger">Fetch now</button></h1>
                </header>
                <div className={`content ${isLoading ? 'is-loading': ''}`}>
                    <div className="panel-group">
                        {
                            !isLoading && contacts.length > 0 ? contacts.map((contact) => {
                                const {username, name, email, location} = contact;
                                return (
                                    <Collapsible key={username} title={name}>
                                        <p>{email}<br />{location}</p>
                                    </Collapsible>
                                );
                            }) : null
                        }
                    </div>
                    <div className="loader">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
