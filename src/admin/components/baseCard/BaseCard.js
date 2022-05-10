import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
  Button
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { useRouter } from 'next/router'
import Link from "next/link";
const BaseCard = (props) => {
  const router = useRouter();
  return (
    <Card>
      <Box p={2} display="flex" justify-content="space-between" alignItems="center" className="card-container">
        <Typography variant="h4">
          {props.backArrow?(
             <FeatherIcon onClick={() => router.back()}
             icon="arrow-left"
             width="20"
             height="20"
           />
          ):null}
          {props.title}
          </Typography>
        {props.link ? (
          <Link href={`/admin/${props.link}`}>
            {props.linkTitle}
          </Link>
        ) : null}
      </Box>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
