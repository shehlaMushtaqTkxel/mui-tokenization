import { useState } from "react";
import { Box, Button, Checkbox, Input, Typography } from "@mui/material";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
const Signup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "text-error-primary",
      }}
    >
      <Box
        sx={{
          width: "440px",
          backgroundColor: "white",
          padding: "32px", //"var(--joy-spacing-13xl)",
          display: "flex",
          flexDirection: "column",
          gap: "32px", //"var(--joy-spacing-13xl)",
        }}
        borderRadius="12px" //"var(--joy-spacing-xl)"
      >
        <Box display="flex" flexDirection="column" gap="0.625rem">
          <Typography>Welcome to signup</Typography>
          <Typography>Enter all the required information</Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="1.5rem">
          <Input placeholder="Name" />
          <Input placeholder="Email Address" />
          <Input
            placeholder="Password"
            type="password"
            endAdornment={<RemoveRedEyeOutlined fontSize="small" />}
          />
          <Box display="flex" gap="15px" alignItems="center">
            {/* <Checkbox  /> */}
            <div>{/* <Checkbox label=" Accept Terms & Conditions" /> */}</div>
            {/* <Typography level="sm.regular" fontSize="xs">
              Accept Terms & Conditions
            </Typography> */}
          </Box>
          <Button variant="contained" size="large" color="primary">
            Signup
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
