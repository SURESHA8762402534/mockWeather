import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Rawjson = () => {
  const navigate = useNavigate();
  const rawJsonData = useLocation().state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={() => navigate(-1)} sx={{ m: 2 }}>
        GO BACK
      </Button>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", textDecoration: "underline", m: 2 }}
      >
        RAW JSON DATA
      </Typography>

      <pre>{JSON.stringify(rawJsonData, null, 4)}</pre>
    </div>
  );
};

export default Rawjson;
