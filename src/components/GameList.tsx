import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  Tooltip,
  Container,
  Grid,
  Pagination,
  Box,
} from '@material-ui/core';
import { pipe, slice, map } from 'rambda';
import { getLiveGames } from '../services';

const PAGE_SIZE = 20;

const chanegPage = (page: number, pageSize: number) => slice((page - 1) * pageSize, page * pageSize);

const GameList = () => {
  const { data = [] } = useQuery('getGames', getLiveGames);
  const [page, setPage] = useState<number>(1);

  return (
    <Container maxWidth="xl">
      <Grid spacing={2} container>
        {chanegPage(
          page,
          PAGE_SIZE,
        )(data).map(({ title, id, thumbnail, short_description }) => (
          <Grid item key={id} xs={3}>
            <Card>
              <CardMedia component="img" height={200} image={thumbnail} alt={title} />
              <CardContent>
                <Typography variant="h6" className="truncate">
                  {title}
                </Typography>
                <Tooltip title={short_description} arrow placement="top">
                  <Typography className="truncate">{short_description}</Typography>
                </Tooltip>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box className="flex my-8 justify-center">
        <Pagination
          count={Math.ceil((data?.length ?? 0) / PAGE_SIZE)}
          variant="outlined"
          color="primary"
          page={page}
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </Box>
    </Container>
  );
};

export default GameList;
