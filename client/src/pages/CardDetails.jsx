import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import "../styles/card.css";
import axios from "axios";
import { useEffect, useState } from "react";

//  function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/01206301-d7e5-481c-8211-dbede72bde9a.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="Item Image"
//         title="green iguana"
//       />
//       <CardContent>

//       </CardContent>
//       <CardActions>

//       </CardActions>
//     </Card>
//   );
// }

export default function OutlinedCard() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/items")
      .then((res) => setMyData(res.data))
      .catch((error) => setIsError(error.message));
  }, []);
  return (
    <Box sx={{ minWidth: 275, m: 3 }}>
      {isError !== " " && <h2>{isError}</h2>}

      <Card variant="outlined">
        
        <Box sx={{ m: 1 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                edge="end"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}
                color="text.secondary"
              >
                <KeyboardBackspaceRoundedIcon />
              </IconButton>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                Go to home
              </Typography>
            </Box>

            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              <h1> Item Details</h1>
              {myData.slice(1, 2).map((post) => {
                const {
                  _id,
                  name,
                  quantity,
                  category,
                  price,
                  status,
                  brand,
                  image_url,
                } = post;
                return (
                  <div className="container-basic">
                    <div className="left-sub-container">
                      <h2> Basic Details</h2>
                      <div className="card" key={_id}>
                        <ul style={{ listStyleType: "none" }}>
                          <li>
                            <span className="title">Name: </span>
                            {name}
                          </li>
                          <li>
                            <span className="title">Brand: </span>
                            {brand}
                          </li>
                          <li>
                            <span className="title">Quantity: </span>
                            {quantity}
                          </li>
                          <li>
                            <span className="title">Status: </span>
                            {status}
                          </li>
                          <li>
                            <span className="title">Category: </span>
                            {category}
                          </li>
                          <li>
                            <span className="title">Price: </span>
                            {price}
                          </li>
                        </ul>
                        {/* <hr /> */}
                      </div>
                    </div>
                    <div className="right-sub-container">
                      <img src={image_url} width={320} height="auto" />
                    </div>
                  </div>
                );
              })}

              <hr />

              <h2> Location Details</h2>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <span className="title">Parent Godown: </span>Parent Godown
                </li>
                <li>
                  <span className="title">Godown ID: </span>Godown ID
                </li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
        
      </Card>
    </Box>
  );
}
