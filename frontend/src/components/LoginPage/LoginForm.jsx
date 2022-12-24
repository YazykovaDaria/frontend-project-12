import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Button, Form, FloatingLabel, FormControl,
} from 'react-bootstrap';
import { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLogin } from '../../api/api';
import { AuthContext } from '../../context/context';
// import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  // const { t } = useTranslation();
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAutorized, setAutorized] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      setAutorized(false);
      try {
        const response = await getLogin(values);
        logIn(response.data);
        navigate('/');
        // console.log(response);
      } catch (err) {
        if (err.response.status === 401) {
          console.log('auth err');
          setAutorized(true);
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
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              isInvalid={(formik.touched.username && formik.errors.username) || isAutorized}
              ref={inputRef}

            />
            {formik.touched.username && formik.errors.username && (
            <span className="text-danger">{formik.errors.username}</span>
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
              isInvalid={(formik.touched.password && formik.errors.password) || isAutorized}
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
