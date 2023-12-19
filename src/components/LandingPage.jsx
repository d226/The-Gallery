// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import { useNavigate } from "react-router-dom";
// import "./LandingPage.css";

// function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="landing-page-container">
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ bgcolor: "transparent" }}>
//           <Toolbar sx={{ bgcolor: "transparent", color: "#ffffff" }}>
//             <Box width="100%">
//               <Stack direction="row" justifyContent="space-between">
//                 <Typography variant="h6" component="div">
//                   Google Photos
//                 </Typography>
//                 <Box>
//                   <Stack direction="row" spacing={2}>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         bgcolor: "transparent",
//                         color: "#1A73E8",
//                         "&:hover": { bgcolor: "#1A73E8", color: "#ffffff" },
//                       }}
//                       onClick={() => navigate("/signin")}
//                     >
//                       Sign in
//                     </Button>

//                     <Button
//                       variant="outlined"
//                       sx={{
//                         bgcolor: "transparent",
//                         color: "#1A73E8",
//                         "&:hover": { bgcolor: "#1A73E8", color: "#ffffff" },
//                       }}
//                       onClick={() => navigate("/signup")}
//                     >
//                       Sign up
//                     </Button>
//                   </Stack>
//                 </Box>
//               </Stack>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </div>
//   );
// }

// export default LandingPage;

import React from "react";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import image1 from "../Assests/pexels-craig-adderley-1563356.jpg";
import image2 from "../Assests/pexels-oliver-sjöström-1433052.jpg";
import image3 from "../Assests/pexels-pixabay-372166.jpg";
import image4 from "../Assests/pexels-pixabay-45911.jpg";
import "./LandingPage.css";

const images = [image1, image2, image3, image4];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }}>
          <Toolbar sx={{ bgcolor: "transparent", color: "#ffffff" }}>
            <Box width="100%">
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6" component="div">
                  The Gallery
                </Typography>
                <Box>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: "transparent",
                        color: "#ffffff",
                        "&:hover": { bgcolor: "#1A73E8", color: "#ffffff" },
                      }}
                      onClick={() => navigate("/signin")}
                    >
                      Sign in
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: "transparent",
                        color: "#ffffff",
                        "&:hover": { bgcolor: "#1A73E8", color: "#ffffff" },
                      }}
                      onClick={() => navigate("/signup")}
                    >
                      Sign up
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <motion.div
        className="photo-container"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`photo-${index + 1}`}
            className={`photo photo-${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default LandingPage;
