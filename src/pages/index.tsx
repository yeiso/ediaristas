import SafeEnviroment from "ui/components/feedback/safeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

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

      <UserInformation
        name={"Gabriel Yeiso"}
        picture={"https://github.com/yeiso.png"}
        rating={4}
        description={"Americana"}
      />
    </div>
  );
}
