import { Formik, Form, Field } from "formik";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name">
            {({ field }) => (
              <FormControl isInvalid={errors.name && touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" {...field} />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
