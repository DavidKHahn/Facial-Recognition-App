import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
// access to modal-root from index.html
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }
// Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
    render() {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

export default Modal;