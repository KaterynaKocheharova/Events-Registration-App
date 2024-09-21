import { Text } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css["loader-group"]}>
        <Text>Loading. Please, wait</Text>
        <Circles color="purple" />
      </div>
    </div>
  );
};

export default Loader;
