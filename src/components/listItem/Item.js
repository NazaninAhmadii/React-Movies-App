import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    width: "100%",
  },
  image: {
    width: 200,
    height: 280,
    position: "relative",
  },
  img: {
    // margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    // position: "absolute",
    // left: "50%",
    // transform: "translate(-50%)",
  },
}))

function Item(props) {
  const { id, title, popularity, releasedDate, overview, imageUrl } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} key={id}>
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  {title}
                </Typography>
                <Typography variant="body1" gutterBottom color="textSecondary">
                  Released Date: {releasedDate} | Popularity: {popularity}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {overview}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Item
