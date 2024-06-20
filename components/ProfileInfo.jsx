
import { Avatar, Box, Button, Grid, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";

export const ProfileInfo = () => {


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Avatar
            alt="Profile Picture"
            src="components/image/Arun.png"
            sx={{ width: 150, height: 200 }}
          />
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2">Bio: Computer Science Student at XYZ College</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Edit Profile
          </Button>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6">Posts</Typography>
              <Typography variant="body2">23</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Followers</Typography>
              <Typography variant="body2">105</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Following</Typography>
              <Typography variant="body2">150</Typography>
            </Grid>
          </Grid>
          <Box sx={{ width: "100%", mt: 2 }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Posts" />
              <Tab label="About" />
              <Tab label="Followers" />
              <Tab label="Following" />
            </Tabs>
            {value === 0 && <PostsTab />}
            {value === 1 && <AboutTab />}
            {value === 2 && <FollowersTab />}
            {value === 3 && <FollowingTab />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function PostsTab() {
  return (
    <Box>
      {/* Replace with actual post components */}
      <Typography variant="body1">Post 1</Typography>
      <Typography variant="body1">Post 2</Typography>
      <Typography variant="body1">Post 3</Typography>
    </Box>
  );
}

function AboutTab() {
  return (
    <Box>
      <Typography variant="body1">Age: 20</Typography>
      <Typography variant="body1">Major: Computer Science</Typography>
      <Typography variant="body1">Hobbies: Coding, Reading, Gaming</Typography>
    </Box>
  );
}

function FollowersTab() {
  return (
    <Box>
      {/* Replace with actual follower components */}
      <Typography variant="body1">Follower 1</Typography>
      <Typography variant="body1">Follower 2</Typography>
      <Typography variant="body1">Follower 3</Typography>
    </Box>
  );
}

function FollowingTab() {
  return (
    <Box>
      {/* Replace with actual following components */}
      <Typography variant="body1">Following 1</Typography>
      <Typography variant="body1">Following 2</Typography>
      <Typography variant="body1">Following 3</Typography>
    </Box>
  );
}
