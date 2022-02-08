import SafeEnviroment from "ui/components/feedback/safeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@material-ui/core";
import { FormElementsContainer } from "@styles/index.style";
import {
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e conheça todos os profissionais da sua localidade"
        }
      />
      <FormElementsContainer>
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
        />
        <Typography color={"error"}>CEP Inválido</Typography>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px" }}
        >
          Buscar
        </Button>
      </FormElementsContainer>

      <ProfissionaisPaper>
        <ProfissionaisContainer>
          <UserInformation
            name={"Gabriel Yeiso"}
            picture={"https://github.com/yeiso.png"}
            rating={4}
            description={"Americana"}
          />

          <UserInformation
            name={"Gabriel Yeiso"}
            picture={"https://github.com/yeiso.png"}
            rating={4}
            description={"Americana"}
          />

          <UserInformation
            name={"Gabriel Yeiso"}
            picture={"https://github.com/yeiso.png"}
            rating={4}
            description={"Americana"}
          />

          <UserInformation
            name={"Gabriel Yeiso"}
            picture={"https://github.com/yeiso.png"}
            rating={4}
            description={"Americana"}
          />

          <UserInformation
            name={"Gabriel Yeiso"}
            picture={"https://github.com/yeiso.png"}
            rating={4}
            description={"Americana"}
          />

          <UserInformation
            name={"Gabriel Yeiso"}
            picture={"https://github.com/yeiso.png"}
            rating={4}
            description={"Americana"}
          />
        </ProfissionaisContainer>
      </ProfissionaisPaper>
    </div>
  );
}
