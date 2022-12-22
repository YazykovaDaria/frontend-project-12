import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button, Form, FloatingLabel, FormControl,
} from 'react-bootstrap';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      password: '',
    },
    validationSchema: yup.object({
      nickname: yup.string()
        .min(2, 'errors.nickname.length')
        .max(20, 'errors.nickname.length')
        .required('errors.nickname.required'),
      password: yup.string()
        .min(2, 'errors.password.length')
        .max(20, 'errors.password.length')
        .required('errors.password.required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h3>Войти</h3>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formLogin">
          <FloatingLabel
            label="loginPlaceholder"
            className="mb-3"
            controlId="nickname"
          >
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.nickname}
              name="nickname"
              autoComplete="nickname"
              isInvalid={(formik.touched.nickname && formik.errors.nickname)}
              // ref={inputRef}
              placeholder="loginPlaceholder"
            />
            {formik.touched.nickname && formik.errors.nickname && (
            <span className="text-danger">{formik.errors.nickname}</span>
            )}
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <FloatingLabel
            label="passwordPlaceholder"
            controlId="password"
            className="mb-4"
          >
            <FormControl
              type="password"
              name="password"
              placeholder="passwordPlaceholder"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={(formik.touched.password && formik.errors.password)}
            />
            {formik.touched.password && formik.errors.password && (
            <span className="text-danger">{formik.errors.password}</span>
            )}
            <FormControl.Feedback type="invalid" tooltip>errors.other.authFailed</FormControl.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          Войти
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
