import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

const EventsBoardPage = lazy(() => import("./pages/EventsBoardPage"));
const EventsParticipantsPage = lazy(() =>
  import("./pages/EventsParticipantsPage")
);
const EventsRegistrationPage = lazy(() =>
  import("./pages/EventsRegistrationPage")
);

export default function App() {
  return (
    <div id="App">
      <Suspense fallback={null}>
        <Layout>
          <Routes>
            <Route path="/" element={<EventsBoardPage />} />
            <Route path="/register" element={<EventsRegistrationPage />} />
            <Route
              path="/participants/:eventId"
              element={
                <EventsParticipantsPage
                  component={<EventsParticipantsPage />}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Suspense>
    </div>
  );
}
