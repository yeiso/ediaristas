import React from "react";
import { SafeEnviromentCointainer } from "./SafeEnviroment.style";
import { Container } from "@material-ui/core";

const SafeEnviroment = () => {
  return (
    <SafeEnviromentCointainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnviromentCointainer>
  );
};

export default SafeEnviroment;
