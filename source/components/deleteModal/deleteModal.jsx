import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import { test } from 'components/button';

const DeleteModal = props => (
  <div className="delete-modal" onClick={props.cancel}>
    <div className="delete-modal__content">
      <p>Er du sikker på at du vil slette dette forslaget?</p>
      <h2>{props.suggestion.title}</h2>
      <div className="delete-modal__buttons">
        <Button onClick={props.cancel} text="Tilbake" />
        <Button onClick={props.confirm} text="Slett" className="--red" />
      </div>
    </div>
  </div>
);

DeleteModal.propTypes = {
  suggestion: PropTypes.object,
  cancel: PropTypes.func,
  confirm: PropTypes.func
};

export default DeleteModal;
