import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'admin/components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

ResetPasswordForm.defaultValues = {
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

function ResetPasswordForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    newPassword: yup.string().required('Không được bỏ trống').min(6, 'Nhập ít nhất 6 kí tự'),
    retypeNewPassword: yup
      .string()
      .required('Không được bỏ trống.')
      .oneOf([yup.ref('newPassword')], 'Mật khẩu không trùng khớp'),
  });

  const form = useForm({
    //liệt kê tất cả các field ở đây
    defaultValues: {
      newPassword: '',
      retypeNewPassword: '',
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
        Reset your password
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <PasswordField name="newPassword" label="Enter password" form={form} />
        <PasswordField name="retypeNewPassword" label="Retype password" form={form} />

        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Reset password
        </Button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
