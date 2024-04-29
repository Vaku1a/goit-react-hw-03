import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const phoneSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required. Please fill in the field"),
  number: Yup.string()
    .trim()
    .matches(/^\+?\d{10,14}$/, "Phone number is not valid")
    .required(
      "Phone is required. Matches a phone number with optional '+' prefix and between 10-14 digits"
    ),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    console.log("newContact:>>", newContact);
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={phoneSchema}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Enter your name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.group}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            placeholder="+1234567890"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
