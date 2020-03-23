import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  styledFormWrapper,
  styledButton,
  styledForm,
  styledHeader,
  styledInput,
  styledLabel
} from './styles';

class StreamForm extends React.Component {
  renderInput({ input, meta }) {
    return (
      <>
        <input {...input} style={styledInput} autoComplete="off" />
        <div>{meta.touched && meta.error}</div>
      </>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div style={styledFormWrapper}>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          style={styledForm}
        >
          <div style={styledHeader}>
            {this.props.title} Stream
            {this.props.icon()}
          </div>
          <label style={styledLabel}>New Stream Title</label>
          <Field name="title" component={this.renderInput} />
          <label style={styledLabel}>New Stream Description</label>
          <Field name="description" component={this.renderInput} />
          <button style={styledButton}>{this.props.buttonTitle} Stream</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Title should be present';
  }
  if (!formValues.description) {
    errors.description = 'Give your channel a description!';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);
