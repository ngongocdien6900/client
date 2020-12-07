import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles, Typography } from '@material-ui/core';
import InputField from 'admin/components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

ForgotPasswordForm.defaultValues = {
  onSubmit: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    //1 là 8px
    paddingTop: theme.spacing(10),
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
    borderRadius: theme.spacing(3),
  },
}));

function ForgotPasswordForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    email: yup.string().required('Không được bỏ trống').email('Nhập đúng định dạng email'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (!onSubmit) return;

    onSubmit(values);

    form.reset();
  };

  return (
    <div className={classes.root}>

      <Typography className={classes.title} component="h3" variant="h5">
        Forgot Password
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Enter your email address" form={form} />

        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Reset password
        </Button>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
