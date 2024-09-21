import { useId, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Heading,
  Flex,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { registerParticipant } from "../non-redux-api/regitsterParticipant";
import { activateSuccessToast, activateErrorToast } from "../utils/toast";

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
});

const RegistrationForm = () => {
  const fullNameId = useId();
  const emailId = useId();
  const dateId = useId();
  const radioId = useId();

  const { eventId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    registerParticipant({ ...values, eventId })
      .then(() => {
        activateSuccessToast("Successfully registered!");
        resetForm();
      })
      .catch((error) => {
        if (
          error.response.data.message === "Already registered for this event!"
        ) {
          activateErrorToast(error.response.data.message);
        } else {
          activateErrorToast("Registration error. Try again");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box p="1rem" boxShadow="base" width="400px">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          birthDate: "",
          heardFrom: "social media",
        }}
        validationSchema={registerParticipantSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Heading as="h3" size="md" mb="2rem">
              Register for the event
            </Heading>
            <Flex direction="column" gap="1rem">
              {/* =================================================== FULL NAME ================================================== */}
              <Field name="fullName">
                {({ field }) => (
                  <FormControl isInvalid={errors.fullName && touched.fullName}>
                    <FormLabel htmlFor={fullNameId} color="purple.400">
                      Full Name
                    </FormLabel>
                    <Input
                      {...field}
                      id={fullNameId}
                      focusBorderColor="purple.400" // Add this line
                    />
                    <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {/* ==================================================== EMAIL ============================================ */}
              <Field name="email">
                {({ field }) => (
                  <FormControl isInvalid={errors.email && touched.email}>
                    <FormLabel htmlFor={emailId} color="purple.400">
                      Email
                    </FormLabel>
                    <Input
                      id={emailId}
                      type="email"
                      {...field}
                      focusBorderColor="purple.400"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {/* ================================================== BIRTH DATE ========================================== */}
              {/* BIRTH DATE */}
              <Field name="birthDate">
                {({ field }) => (
                  <FormControl
                    isInvalid={errors.birthDate && touched.birthDate}
                  >
                    <FormLabel htmlFor={dateId} color="purple.400">
                      Birth Date
                    </FormLabel>
                    <Input
                      id={dateId}
                      type="date"
                      {...field}
                      focusBorderColor="purple.400"
                    />
                    <FormErrorMessage>{errors.birthDate}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {/* =================================================== HEARD FROM ========================================== */}
              <Field name="heardFrom">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.heardFrom && form.touched.heardFrom}
                  >
                    <FormLabel color="purple.400">Where did you hear about the event?</FormLabel>
                    <RadioGroup
                      value={field.value}
                      onChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    >
                      <Flex direction="column" gap="1rem">
                        {["social media", "friends", "found myself"].map(
                          (option, index) => (
                            <Radio
                              colorScheme="purple"
                              key={index}
                              id={`${radioId}${index}`}
                              value={option}
                            >
                              {option}
                            </Radio>
                          )
                        )}
                      </Flex>
                    </RadioGroup>
                    <FormErrorMessage>{form.errors.heardFrom}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                isLoading={isLoading}
                loadingText="Submiting"
                type="submit"
                colorScheme="purple"
                mt="1rem"
              >
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
