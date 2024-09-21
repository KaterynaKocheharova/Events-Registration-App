import Section from "../components/common/Section/Section";
import PageContainer from "../components/common/Container/Container";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Center } from "@chakra-ui/react";

const EventsRegistrationPage = () => {
  return (
    <Section>
      <PageContainer> 
        <Center>
          <RegistrationForm />
        </Center>
      </PageContainer>
    </Section>
  );
};

export default EventsRegistrationPage;
