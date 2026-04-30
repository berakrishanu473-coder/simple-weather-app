import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1620018015286-f06bedb5190b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1767477384899-7ae571d7ee14?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 355, boxShadow: "8px 10px 5px rgb(142, 149, 215)", marginBottom: "2rem" }}>
                    <CardMedia
                        sx={{ height: 175, 
                            borderBottomLeftRadius: "8px", 
                            borderBottomRightRadius: "8px",
                        }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 17 ? HOT_URL : COLD_URL}
                        title="weather widget"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 17 ? <SunnyIcon/> : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temparature:<b>{info.temp}&deg;</b>C</p>
                        <p>Humidity:<b>{info.humidity}</b></p>
                        <p>Min.Temparature:<b>{info.tempMin}&deg;</b>C</p>
                        <div>Max.Temparature:<b>{info.tempMax}&deg;</b>C</div>
                        <div>The weather can be described as <b><i>{info.weather}</i></b> feels like <b>{info.feelsLike}</b>&deg;C</div>
                        </Typography>
                    </CardContent>
                 </Card>
            </div>
        </div>
    )
}