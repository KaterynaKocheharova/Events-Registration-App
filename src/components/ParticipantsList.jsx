import CustomGrid from "./common/CustomGrid";
import ParticipantItem from "./ParticipantItem";

const ParticipantsList = ({ participants }) => {
  return (
    <CustomGrid>
      {participants.map((participant) => (
        <ParticipantItem key={participant._id} participantData={participant} />
      ))}
    </CustomGrid>
  );
};

export default ParticipantsList;
