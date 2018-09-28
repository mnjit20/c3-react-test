import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PearsonUser from '../PearsonUser/PearsonUser';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };

    // getPearsonListRender = this.getPearsonListRender.bind(this);
  }

  getPearsonListRender() {
    const { classes } = this.props;
    return (
      <div className="box1">
        <ul>
          {
            this.state.users.map((user) => {
              return (<PearsonUser key={user.id} class={classes.paper} user={user} />);
            })
          }
        </ul>
      </div>
    );



    /*return (
      // <PearsonUser class={classes.paper} />
      <Grid container spacing={24}>
        {
          this.state.users.map((user) => {
            <PearsonUser class={classes.paper} userData={user} />
          })
        }
      </Grid>
    );*/

  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="pearon-users">
          <h1>Pearson User Management</h1>
          {/* <PearsonUser class={classes.paper} /> */}
          {/* Render users here */}
          {
            // this.state.users.map((user) => {
            //   //  console.log(user);
            // })
          }{
            this.getPearsonListRender()
          }

        </div>
      </div>
    );
  }
}




PearsonUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PearsonUsers);
