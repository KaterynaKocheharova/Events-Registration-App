import { useSelector } from "react-redux";
import { selectIsLoading } from "../../../redux/events/selectors";
import { Text } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    isLoading && (
      <div className={css.backdrop}>
        <div className={css["loader-group"]}>
          <Text fontSize="xl">Loading. Please, wait</Text>
          <Circles color="purple" />
        </div>
      </div>
    )
  );
};

export default Loader;
