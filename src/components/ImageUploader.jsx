import { useState, useEffect, useMemo } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage, auth } from "../firebase/firebase";
import { v4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IconButton from "@mui/material/IconButton";

function ImageUploader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state;
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");
  console.log(email);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setUploadedFileName(selectedFile.name);
      setImageUpload(event.target.files[0]);
    }
  };
  const imagesListRef = useMemo(() => ref(storage, `images/${email}`), [email]);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${email}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await listAll(imagesListRef);
      const urls = await Promise.all(
        response.items.map((item) => getDownloadURL(item))
      );
      setImageUrls(urls);
    };

    fetchData();
  }, [imagesListRef]);

  return (
    <div>
      <Stack
        direction={"row"}
        spacing={8}
        sx={{ my: "3%" }}
        justifyContent={"center"}
      >
        <IconButton aria-label="Add" size="large" component="label">
          <AddBoxIcon fontSize="inherit" />
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </IconButton>
        {uploadedFileName && <p>Uploaded File: {uploadedFileName}</p>}
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={uploadFile}
        >
          Upload Image
        </Button>
        <Button variant="outlined" onClick={signOut}>
          Sign Out
        </Button>
      </Stack>
      <Box sx={{ width: "100%", p: 5 }}>
        <Stack
          flexWrap={"wrap"}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {imageUrls.map((url) => {
            return (
              <Box sx={{ height: 5, my: 10 }}>
                <img src={url} height={"200px"} alt="" />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
}

export default ImageUploader;
