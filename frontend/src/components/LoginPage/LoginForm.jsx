import * as yup from 'yup';
import { Formik, Field, Form } from 'formik';
import style from './Login.module.css';

const validationLoginScheema = yup.object({
  username: yup.string()
    .min(2, 'errors.username.length')
    .max(20, 'errors.username.length')
    .required('errors.username.required'),
  password: yup.string()
    .min(2, 'errors.password.length')
    .max(20, 'errors.password.length')
    .required('errors.password.required'),
});

const LoginForm = () => (
  <div>
    <h2>Войти</h2>
    <Formik
      initialValues={{
        nickname: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={validationLoginScheema}
    >

      <Form className={`d-flex flex-column ${style.form}`}>
        <Field className="form-control" id="nickname" name="nickname" placeholder="Ваш ник" />

        <Field className="form-control" id="password" name="password" placeholder="Пароль" />
        <button className="btn btn-primary" type="submit">Войти</button>
      </Form>
    </Formik>
  </div>
);


export default LoginForm;
