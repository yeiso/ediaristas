import SafeEnviroment from "ui/components/feedback/safeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import  TextFieldMask  from "ui/components/inputs/TextFieldMask/TextFieldMask";

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

      <TextFieldMask
      label={'Digite seu CEP'}
      fullWidth />

      <UserInformation
        name={"Gabriel Yeiso"}
        picture={"https://github.com/yeiso.png"}
        rating={4}
        description={"Americana"}
      />
    </div>
  );
}
