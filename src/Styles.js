import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heroBanner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: `url('/path/to/your/background.jpg') no-repeat center center`,
    backgroundSize: "cover",
    textAlign: "center",
    color: "#fff",
  },
  featuresSection: {
    padding: theme.spacing(8, 0),
  },
  feature: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  footer: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
