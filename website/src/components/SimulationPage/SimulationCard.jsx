import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { images } from "../../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useLocation } from "react-router-dom";

const LinkParent = ({ children, title }) => {
  const location = useLocation();
  if (location.pathname.includes("csesh")) {
    return <>{children}</>;
  } else {
    return (
      <Link to={`/simulations/${title}`} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    );
  }
};

const DescriptionTypography = ({ description }) => {
  if (description) {
    return (
      <Typography
        component="body"
        variant="body1"
        sx={{
          paddingX: 1,
          fontSize: 15,
          mt: 1,
          color: "primary.text",
          backgroundColor: "inherit",
          overflow: "hidden",
        }}
      >
        {description}
      </Typography>
    );
  }
  return null; // Don't render anything if description is not provided
};

const fetchImage = async (image) => {
  const pathReference = ref(images, image);
  const imageURL = await getDownloadURL(pathReference);
  return await imageURL;
};
const SimulationCard = ({ title, description, imageurl, checked }) => {
  const [image, setImage] = useState();
  const location = useLocation()

  useEffect(() => {
    (async () => {
      const image = await fetchImage(imageurl);
      setImage(image);
    })();
  }, [imageurl]);

  return (
      <LinkParent title={title}>
        <Card
          component="div"
          sx={{
            // width: "70%",
            backgroundColor: "primary.main",
            ...(location.pathname.includes("csesh") && checked && {
              backgroundColor: "primary.light"
            }),
            borderRadius: 3,
            cursor: "pointer",
            m: 1,
            // my: 1,
            textOverflow: "ellipsis",
            // whiteSpace: 'nowrap',
            // height: "50vh"
            boxShadow: "none"
          }}
        >
          <Grid container columns={2}>
            <Grid item xs={1}>
              <CardContent>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    fontSize: 20,
                    color: "primary.text",
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </Typography>
                <DescriptionTypography description={description} />
              </CardContent>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                padding: 1,
                backgroundColor: "primary.text",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <CardMedia
                component="img"
                src={image}
                sx={{
                  padding: 1,
                  backgroundColor: "primary.text",
                  maxHeight: "fit-content",
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </LinkParent>
  );
};

export default SimulationCard;
