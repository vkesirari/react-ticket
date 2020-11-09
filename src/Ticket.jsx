import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  //   paper: {
  //     padding: theme.spacing(2),
  //     margin: "auto",
  //     maxWidth: 500,
  //   },
  //   image: {
  //     width: 128,
  //     height: 128,
  //   },
  //   img: {
  //     margin: "auto",
  //     display: "block",
  //     maxWidth: "100%",
  //     maxHeight: "100%",
  //   },
});
class Ticket extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className="tt" style={{ width: "100%" }}>
          {/* <Paper className={classes.paper}> */}
          <Grid
            container

            //  style={{ width: "50%" }}
          >
            {/* col1 for row */}
            <Grid
              item
              xs={2}
              container
              style={{ backgroundColor: "lightgrey" }}
            >
              {/* <Typography>QrCode</Typography> */}
            </Grid>
            {/* col2 for other stuff */}
            <Grid
              item
              xs={10}
              container
              // style={{ backgroundColor: "grey" }}
            >
              <Grid item xs={12} container direction="row">
                <Grid
                  item
                  xs={12}
                  style={{ backgroundColor: "purple", height: "60px" }}
                >
                  <Grid item xs={12} container direction="row">
                    <Grid
                      item
                      xs={6}
                      style={{ backgroundColor: "orange", height: "60px" }}
                    ></Grid>
                    <Grid
                      item
                      xs={6}
                      // style={{ backgroundColor: "purple", height: "40px" }}
                    >
                      <Grid item xs={12} container>
                        <Grid
                          item
                          xs={6}
                          // style={{ backgroundColor: "purple", height: "40px" }}
                        ></Grid>
                        <Grid
                          item
                          xs={6}
                          // style={{ backgroundColor: "purple", height: "40px" }}
                        >
                          {/* <Typography gutterBottom variant="subtitle1">
                            TEAM STADIUM
                          </Typography> */}
                          {/* <div style={{ display: "flex" }}> */}
                          <Typography
                            variant="title"
                            style={{ color: "white" }}
                          >
                            TEAM
                          </Typography>
                          <Typography
                            variant="subheading"
                            style={{ color: "white" }}
                          >
                            STADIUM
                          </Typography>
                          {/* </div> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* <Typography gutterBottom variant="subtitle1">
                    Label 1
                  </Typography> */}
                </Grid>

                <Grid item xs={12} container>
                  <Grid
                    item
                    xs={6}
                    container
                    style={{ backgroundColor: "white" }}
                  >
                    <Grid item xs={12} container>
                      <Typography gutterBottom variant="subtitle1">
                        15 August 2018 | 14.00
                      </Typography>
                    </Grid>
                    <Grid item xs={12} container style={{ height: "120px" }}>
                      <Grid
                        item
                        xs={12}
                        container
                        style={{
                          backgroundColor: "lightblue",
                          marginBottom: 5,
                        }}
                      >
                        <Grid item xs={12} container>
                          <Grid
                            item
                            xs={6}
                            style={
                              {
                                // backgroundColor: "purple",
                                // height: "40px",
                              }
                            }
                          >
                            <Typography gutterBottom variant="subtitle1">
                              Zone
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            style={
                              {
                                // backgroundColor: "purple",
                                // height: "40px",
                              }
                            }
                          >
                            <Typography gutterBottom variant="subtitle1">
                              : East Stand
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        container
                        style={{
                          backgroundColor: "#5dbddd",
                          marginBottom: 5,
                        }}
                      >
                        <Grid item xs={12} container>
                          <Grid
                            item
                            xs={6}
                            style={
                              {
                                // backgroundColor: "purple",
                                // height: "40px",
                              }
                            }
                          >
                            <Typography gutterBottom variant="subtitle1">
                              Seat/Row
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            style={
                              {
                                // backgroundColor: "purple",
                                // height: "40px",
                              }
                            }
                          >
                            <Typography gutterBottom variant="subtitle1">
                              : 4/5
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        container
                        style={{
                          backgroundColor: "lightblue",
                          marginBottom: 5,
                        }}
                      >
                        <Grid item xs={12} container>
                          <Grid
                            item
                            xs={6}
                            style={
                              {
                                // backgroundColor: "purple",
                                // height: "40px",
                              }
                            }
                          >
                            <Typography gutterBottom variant="subtitle1">
                              Price
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            style={
                              {
                                // backgroundColor: "purple",
                                // height: "40px",
                              }
                            }
                          >
                            <Typography gutterBottom variant="subtitle1">
                              : $100
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} container>
                      <Typography
                        gutterBottom
                        // variant="subtitle2"
                        className="l1"
                      >
                        League A
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    container
                    // style={{ backgroundColor: "yellow" }}
                  >
                    <Grid item xs={12} container>
                      <Grid
                        item
                        xs={6}
                        //  style={{ backgroundColor: "red" }}
                      >
                        <Typography gutterBottom variant="subtitle1">
                          img
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        xs={6}
                        // style={{ backgroundColor: "pink" }}
                      >
                        {/* <Typography gutterBottom variant="subtitle1">
                          det
                        </Typography> */}
                        <Grid
                          item
                          xs={12}
                          alignItems="center"
                          justify="center"
                          container
                          style={{
                            backgroundColor: "orange ",
                            marginTop: "5px",
                          }}
                        >
                          <Typography gutterBottom className="l3">
                            League A
                          </Typography>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          container
                          style={{ height: "120px" }}
                        >
                          {/* <Typography gutterBottom variant="subtitle1">
                            demo
                          </Typography> */}
                          <Grid
                            item
                            xs={12}
                            container
                            alignItems="center"
                            justify="center"
                            // style={{ backgroundColor: "purple " }}
                          >
                            <Typography
                              gutterBottom
                              // variant="subtitle1"
                              className="l2"
                            >
                              Adult
                            </Typography>
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            container
                            alignItems="center"
                            justify="center"
                            // style={{ backgroundColor: "purple " }}
                          >
                            <Typography gutterBottom className="l2">
                              ADMIT ONE
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          container
                          style={{
                            backgroundColor: "purple ",
                            marginBottom: "5px",
                            height: "30px",
                          }}
                        >
                          {/* <Typography gutterBottom variant="subtitle1">
                            LeagueB
                          </Typography> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} style={{ height: "25px" }}>
                  <Grid item xs={12} container direction="row">
                    <Grid
                      item
                      xs={6}
                      style={{ backgroundColor: "purple", height: "25px" }}
                    ></Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ backgroundColor: "orange", height: "25px" }}
                    ></Grid>
                  </Grid>
                  {/* <Typography gutterBottom variant="subtitle1">
                    Label 2
                  </Typography> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Paper> */}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Ticket);

// <div style={{display:"flex"}}>
//   <Typography variant="title" color="inherit" noWrap>
//      Project:
//   </Typography>
//   <Typography variant="subheading" color="inherit" noWrap>
//        Example
//   </Typography>
// </div>
