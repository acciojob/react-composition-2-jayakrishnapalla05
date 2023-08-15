import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.modalRef.current && !this.modalRef.current.contains(event.target)) {
      this.props.onClose();
    }
  };

  render() {
    const { show, onClose, children } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="model-overlay">
        <div className="model-dialog" ref={this.modalRef}>
          <button className="model-close" onClick={onClose}>
            Close
          </button>
          <p className="model-p">{children}</p>
        </div>
      </div>
    );
  }
}

export default Modal;