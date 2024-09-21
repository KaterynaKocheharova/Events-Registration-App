// import { useSelector } from "react-redux";
// import { selectIsLoading } from "../../../redux/events/selectors";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  // const isLoading = useSelector(selectIsLoading);

  const buildContactOperationMessage = () => {
    // switch (isLoading) {
    //   case "adding-contact":
    //     return "Adding a new contact. Please, wait.";
    //   case "deleting-contact":
    //     return "Deleting the contact. Please, wait.";
    //   case "updating-contact":
    //     return "Updating the contact. Please, wait.";
    //   case "fetching-contacts":
    //     return "Refreshing contacts. Please, wait.";
    //   default:
    //     return "Please, wait";
    // }
  };

  return (
    <div className={css.backdrop}>
      <div className={css["loader-group"]}>
        <p>Loading</p>
        <Circles color="var(--first-color)" />
      </div>
    </div>
  );
};

export default Loader;
