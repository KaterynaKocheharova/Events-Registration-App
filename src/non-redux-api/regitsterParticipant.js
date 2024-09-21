import axios from "axios";

axios.defaults.baseURL = "https://events-service-ff1w.onrender.com";

export const registerParticipant = async (participantData) => {
  const { fullName, eventId, heardFrom, birthDate, email } = participantData;
  await axios.post(
    `participants/register/${eventId}`,  
    { fullName, heardFrom, birthDate, email }
  );
};
