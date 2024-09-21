import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Error from "../../components/common/Error/Error";
import { Wave } from "react-animated-text";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Section>
        <Container>
          <h1 className={css["main-title"]}>
            <Wave
              text={`Manage your contacts here - add, update or delete them!`}
              effect="color"
              effectChange="var(--first-color)"
              speed={15}
            />
          </h1>
          <div className={css["top-container"]}>
            <ContactForm />
            <SearchBox />
          </div>
          {error && (
            <Error>
              Ooops. Something went wrong. Check out the internet connection or
              try again later.
            </Error>
          )}
          <ContactList />
        </Container>
      </Section>
  );
};

export default ContactsPage;
