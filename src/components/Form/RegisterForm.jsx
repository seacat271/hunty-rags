import { useFormik } from "formik";
import { Input } from "./RegisterForm.styled";

export const RegisterForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  function handleSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName" md="10px" display="block">
        First Name
      </label>
      <Input
        id="firstName"
        name="firstName"
        placeholder="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <Input
        id="lastName"
        name="lastName"
        placeholder="Last name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />

      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        placeholder="email@mail.com"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <label htmlFor="phone">Phone</label>
      <Input
        id="phone"
        name="phone"
        placeholder="+38(XXX) XXX-XX-XX"
        type="tel"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
