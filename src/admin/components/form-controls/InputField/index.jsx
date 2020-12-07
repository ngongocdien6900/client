import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {

  const { form, name, label, disabled } = props;
  const { errors } = form;

  const hasError = errors[name];

  return (
    <Controller
        //bắt buộc phải có
        name={name}
        control={form.control}
        //sử dụng lib nào
        as={TextField}

        //sẽ được truyền vào cho textfield 
        margin="normal"
        variant="outlined"
        fullWidth
        label={label}
        disabled={disabled}

        error={!!hasError}
        helperText={errors[name]?.message}
    />
  );
}

export default InputField;
