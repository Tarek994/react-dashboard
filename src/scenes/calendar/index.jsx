import  {useState} from "react"
import FullCalendar, {formatDate} from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import { InteractionPlugin } from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import{
 Box,
 List,
 ListItem,
 ListItemText,
 Typography,
 useTheme,
}from " @mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme"


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt("Pleas enter a new title for your event")
    }
}
export default Calendar;