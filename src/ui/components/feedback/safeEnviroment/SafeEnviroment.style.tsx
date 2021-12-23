import { styled } from "@material-ui/core/styles";
import theme from "ui/themes/theme";

export const SafeEnviromentCointainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)} 0;
  text-align: right;
  font-size: 12px;
`;
