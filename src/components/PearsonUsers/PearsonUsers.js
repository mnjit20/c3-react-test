import React, { Component } from 'react';
import PropTypes from 'prop-types';
import http_api from '../../lib/http_api';
import { USERS_API_URL } from '../../config';
import Loader from '../Loader/Loader';
import SortButton from '../../assets/img/sort3.png';


import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
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
      ],
      dataLoaded: false,
      sort: false
    };

    // getPearsonListRender = this.getPearsonListRender.bind(this);
    this.compareFunc = this.compareFunc.bind(this);
  }

  componentDidMount() {
    console.log('component mounted');

    http_api.get(USERS_API_URL, {
      params: {
        page: 1,
        per_page: 10
      }
    }).then((res) => {
      const allUsers = [...this.state.users, ...res.data];
      console.log('now all with duplicate', allUsers);

      //removing duplicate users from the array
      let uniq = this.getUniqueArray(allUsers);
      //let uniq = allUsers;
      console.log('Uniques ', uniq);

      //console.log('sorting', uniq.sort());
      this.setState({ users: uniq, dataLoaded: true });

    }).catch((e) => {
      console.log('Error', e);
    })

  }

  sort() {
    let users = this.state.users;
    console.log("sorting");
    console.log('sorting', users.sort(this.compareFunc));
    this.setState({
      users: users,
      sort: !this.state.sort
    })
  }
  /**
    * compareFunc - function 
    * Compare function for sorting a array of objects for particular key name
    * @param {array} arr
    */
  compareFunc(a, b) {
    // Use toUpperCase() to ignore character casing
    let genreA;
    let genreB;
    if (this.state.sort) {
      genreA = a.first_name.toUpperCase();
      genreB = b.first_name.toUpperCase();
    } else {
      genreA = b.first_name.toUpperCase();
      genreB = a.first_name.toUpperCase();
    }

    // genreA = a.first_name.toUpperCase();
    // genreB = b.first_name.toUpperCase();


    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }

  /**
    * getUniqueArray - function 
    * Return unique list of array elements, removes all the duplicate entries
    * @param {array} arr
    */

  getUniqueArray(arr) {
    return Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
  }

  /**
  * removeUser - function 
  * To remove individual user from the user list 
  * @param {string} id
  */
  removeUser(id) {
    console.log('id is', id);

    const users = [...this.state.users];

    const index = users.findIndex(user => user.id === id);
    console.log("deletion index is: ", index);

    users.splice(index, 1);
    console.log(users);

    this.setState({ users });

  }


  /**
  * getPearsonListRender function 
  * Making call to get the person list render
  */
  getPearsonListRender() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.users.length > 0 &&
          <div className="sort">
            <img onClick={() => this.sort()} src={SortButton}></img><p onClick={() => this.sort()}>Sort : {this.state.sort ? 'Z-A' : 'A-Z'}</p>
          </div>

        }
        <div className="box1">
          <ul>
            {
              this.state.users.map((user) => {
                return (

                  <PearsonUser key={user.id} user={user} removeUser={() => this.removeUser(user.id)} />

                );
              })
            }{
              this.state.users.length === 0 &&
              <p>User list is empty!</p>
            }

          </ul></div>
      </div>
    );
  }


  /**
  * initRender function to initialize rendering
  * Making call to get the person list render
  */

  initRender() {
    let element = '';
    if (this.state.dataLoaded === false) {
      element = <Loader />
    } else {
      element = this.getPearsonListRender();
    }
    return element;
  }



  /**
  * react render function - render
  * Rendering view to the dom
  */


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="pearon-users">
          <h1>Pearson User Management</h1>
          {
            this.initRender()
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