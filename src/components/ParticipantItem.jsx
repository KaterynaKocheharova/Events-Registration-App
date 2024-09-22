import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

const ParticipantItem = ({ participantData: { fullName, email } }) => (
  <Card border="1px" borderColor="purple.400">
    <CardHeader>
      <Heading as="h3" size="small">
        Participant info
      </Heading>
    </CardHeader>
    <Divider/>
    <CardBody>
      <Text mb="1rem">{fullName}</Text>
      <Text fontSize="14px" color="purple.600">
        {email}
      </Text>
    </CardBody>
    <Divider borderColor="gray.200" />
  </Card>
);
export default ParticipantItem;
