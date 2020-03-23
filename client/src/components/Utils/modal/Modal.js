import React from 'react';
import ReactDOM from 'react-dom';

const ModalDeletion = props => {
  const { content, header, actions, onDismiss } = props;
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{header}</div>
        <div className="content">{content}</div>
        {actions}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default ModalDeletion;
