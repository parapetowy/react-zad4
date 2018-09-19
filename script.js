var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {
                    className: 'app'
                },
                React.createElement(Counter), React.createElement(DisCounter)
            )
        );
    }
});
var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    getDefaultProps: function() {
        console.log('Default props');
        return {};
    },
    render: function() {
        return React.createElement('div', {className: 'button'},
            React.createElement('div', {
                    onClick: this.decrement,
                    style: {cursor: 'pointer'}
                },
                React.createElement('span', {}, 'Odejmowanie ')),
            React.createElement('div', {onClick: this.increment, style: {cursor: 'pointer'}},
                React.createElement('span', {}, 'Dodawanie ')),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        )
    }
});
var DisCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function() {
        return React.createElement('div', {onClick: this.decrement, style: {cursor: 'pointer'}},
            React.createElement('span', {}, 'Odejmowanie ' + this.state.counter)
        );
    }
});
var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));