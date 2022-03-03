import Alert from "react-bootstrap/Alert";
const AlertMeassage = ({info}) => {
  return info === null ? null : (
    <Alert variant={info.type}>{info.message}</Alert>
  );
};
export default AlertMeassage;
