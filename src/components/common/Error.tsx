import { Alert, AlertTitle } from "@material-ui/lab";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => (
  <>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  </>
);

export default Error;
