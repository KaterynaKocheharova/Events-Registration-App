import axios from "axios";

axios.defaults.baseURL = "https://events-service-ff1w.onrender.com";

export const registerParticipant = async (participantData) => {
  const { fullName, eventId, heardFrom, birthDate, email } = participantData;
  await axios.post(
    `/register/${eventId}`,  // Include eventId in the URL path
    { fullName, heardFrom, birthDate, email }  // Pass other data in the request body
  );
};
