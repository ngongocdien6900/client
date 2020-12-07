import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'admin/components/form-controls/InputField';
import PasswordField from 'admin/components/form-controls/PasswordField';

import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultValues = {
  onSubmit: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    //1 là 8px
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    email: yup.string().required('Không được bỏ trống').email('Hãy điền đúng định dạng email'),
    password: yup.string().required('Không được bỏ trống'),
  });

  const form = useForm({
    //liệt kê tất cả các field ở đây
    defaultValues: {
      email: '',
      password: '',
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
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Ex: ngocdien6900@gmail.com" form={form} />
        <PasswordField name="password" label="Enter password" form={form} />

        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
