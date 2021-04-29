import logo from "./logo.svg";
import React from "react";
import { Box, Typography, useTheme, Button } from "@material-ui/core";

function App() {
  const theme = useTheme();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("https://60895b1f8c8043001757e9d9.mockapi.io/esquema")
      .then((data) => data.json())
      .then((response) => {
        document.title = `${response.bundleDetails.title} | fooDLS`;
        const metaDescription = document.querySelector("meta[name=description]");
        metaDescription.setAttribute("content", `${response.bundleDetails["short-description"]}`);
        setData(response);
      });
  }, []);

  return (
    <>
      {data && (
        <Box height={1}>
          <Box p={2} component="header" bgcolor={theme.palette.primary.main}>
            <Box color={theme.palette.primary.contrastText}>
              <Typography variant="h4" component="h1" color="inherit">
                {data.bundleDetails.title}
              </Typography>
            </Box>
          </Box>
          <Box p={2} component="main">
            <Box display="flex" flexWrap="noWrap">
              <Box p={2}>
                <Box>
                  <img src={data.bundleDetails.image} alt="" width="200" />
                </Box>
                <Box my={1}>
                  <Typography variant="h5" color="textPrimary">
                    {data.bundleDetails.title}
                  </Typography>
                </Box>
                <Box my={1}>
                  <Typography variant="subtitle1" color="textSecondary">
                    {data.bundleDetails["short-description"]}
                  </Typography>
                </Box>
              </Box>
              <Box p={2} flexBasis="0px" flexGrow="1">
                <Box p={3} borderRadius={8} bgcolor={theme.palette.primary.main} color={theme.palette.primary.contrastText}>
                  <Typography align="center" variant="h4" color="inherit">
                    New Higher Education Program
                  </Typography>
                  <Typography align="center" variant="subtitle1" color="inherit">
                    {data.bundleDetails.description}
                  </Typography>
                </Box>
                <Box>
                  {data.toc.result.map((item, index) => {
                    return <Box p={2} key={index} width={300}>
                      <Button fullWidth variant="outlined" color="default">
                        {item.name}
                      </Button>
                    </Box>;
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box component="footer" p={2}>
            <Typography>&copy; Copyright by {data.bundleDetails.title} fooDLS</Typography>
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
