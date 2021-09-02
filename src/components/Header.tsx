import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static" className="mb-8">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MoMoFun
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
