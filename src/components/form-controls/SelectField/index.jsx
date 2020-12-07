import { FormHelperText, makeStyles, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
SelectField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1, 0, 1, 0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectField(props) {
  const classes = useStyles();

  const { form, name, label } = props;

  const { errors } = form;

  const hasError = !!errors[name];

  return (
    <FormControl error={hasError} fullWidth variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        as={Select}
        native
        label={label}
        id={name}
      >
        <option aria-label="None" value="" />
        <option value={'female'}>Female</option>
        <option value={'male'}>Male</option>
      </Controller>
      <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default SelectField;
