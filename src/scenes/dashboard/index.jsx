import { Box, Button, IconButton, Typography, useTheme } from "@mui/system";
import {tokens} from "../../theme";
import {mockTranactions } from "../../data/mocData";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Emai";
import PointOfSaleIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from"../../components/GeographyChart"
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";




const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box
       display="flex"
       justifyContent="space-between"
       alignItems="center"
       >
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
      </Box>
      </Box>
  )
}

export default Dashboard;