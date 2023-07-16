import { Box } from "../../components/Box/Box";
import { RegisterForm } from "../../components/Form/RegisterForm";

export const AuthPage = () => {
  return (
    <Box width="100%" height="500px" display="block" padding="40px">
      <RegisterForm />
    </Box>
  );
};
