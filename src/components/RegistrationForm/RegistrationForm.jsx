import { useId } from "react";
import { Formik, Form, Field } from "formik";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Heading,
} from "@chakra-ui/react";
import * as Yup from "yup";

const registerParticipantSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(
      /^[A-Za-z]+(?:['-]?[A-Za-z]+)*(?: [A-Za-z]+(?:['-]?[A-Za-z]+)*)+$/,
      "Full name must contain both first and last names and only letters, spaces, hyphens, or apostrophes"
    )
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("Required"),
  email: Yup.string().email("Should be a valid email").required("Required"),
  birthDate: Yup.string().required("Required"),
  heardFrom: Yup.string()
    .oneOf(
      ["social media", "friends", "found myself"],
      "HeardFrom field should be one of: social media, friends, found myself"
    )
    .required("HeardFrom field is required"),
});

const RegistrationForm = () => {
  const fullNameId = useId();

  return (
    <Box p="1rem" boxShadow="base" width="400px">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          birthDate: "",
          heardFrom: "",
        }}
        validationSchema={registerParticipantSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Heading as="h3" size="md" mb="2rem">
              Register for the event
            </Heading>
            {/* FULL NAME */}
            <Field name="fullName">
              {({ field }) => (
                <FormControl isInvalid={errors.fullName && touched.fullName}>
                  <FormLabel htmlFor={fullNameId}>Full Name</FormLabel>
                  <Input id={fullNameId} {...field} />
                  <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {/* EMAIL */}
            <Field name="email">
              {({ field }) => (
                <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" {...field} />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {/* BIRTH DATE */}
            <Field name="birthDate">
              {({ field }) => (
                <FormControl isInvalid={errors.birthDate && touched.birthDate}>
                  <FormLabel>Birth Date</FormLabel>
                  <Input type="date" {...field} />
                  <FormErrorMessage>{errors.birthDate}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {/* HEARD FROM */}
            <Field name="heardFrom">
              {({ field }) => (
                <FormControl isInvalid={errors.heardFrom && touched.heardFrom}>
                  <FormLabel>Heard From</FormLabel>
                  <Box>
                    {["social media", "friends", "found myself"].map((option) => (
                      <FormControl key={option} display="inline-block" mr="1rem">
                        <Field type="radio" name="heardFrom" value={option} />
                        <FormLabel as="span">{option}</FormLabel>
                      </FormControl>
                    ))}
                  </Box>
                  <FormErrorMessage>{errors.heardFrom}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button type="submit" colorScheme="purple" mt="1rem">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
