import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button, Form, FloatingLabel, FormControl,
} from 'react-bootstrap';
import { logIn } from '../../api/api';
// import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  // const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup.string()
        .min(2, 'errors.userName.length')
        .max(20, 'errors.userName.length')
        .required('errors.userName.required'),
      password: yup.string()
        .min(2, 'errors.password.length')
        .max(20, 'errors.password.length')
        .required('errors.password.required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await logIn(values);
        console.log(response);
      } catch (err) {
        if (err.response.status === 401) {
          console.log('auth err');

        } else {
         console.log('network err');
        }
      }
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
            controlId="username"
          >
            <Form.Control
              name="username"
              autoComplete="username"
              placeholder="login.username"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              isInvalid={(formik.touched.userName && formik.errors.userName)}
              // ref={inputRef}

            />
            {formik.touched.userName && formik.errors.userName && (
            <span className="text-danger">{formik.errors.userName}</span>
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
              autoComplete="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
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
