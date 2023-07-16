import { Formik, Field, Form } from "formik";

export const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const handleSubmit = () => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Name" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Last name" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="email@mail.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
