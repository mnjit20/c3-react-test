import React, { Component } from 'react';
import http_api from '../../lib/http_api';
import { USERS_API_URL } from '../../config';
import Loader from '../Loader/Loader';
import PearsonUser from '../PearsonUser/PearsonUser';
import SortableButton from '../Utility/SortableButton';

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

    this.compareFunc = this.compareFunc.bind(this);
    this.handleSortButtonClick = this.handleSortButtonClick.bind(this);
    this.getPearsonListRender = this.getPearsonListRender.bind(this);
  }

  componentDidMount() {
    http_api.get(USERS_API_URL, {
      params: {
        page: 1,
        per_page: 10
      }
    }).then((res) => {
      const allUsers = [...this.state.users, ...res.data];

      // uniques users
      let uniq = this.getUniqueArray(allUsers);
      this.setState({ users: uniq, dataLoaded: true });

    }).catch((e) => {
      console.log('*** Error ****', e);
    })

  }

  handleSortButtonClick() {
    let users = this.state.users;
    users.sort(this.compareFunc);
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
    const users = [...this.state.users];
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    this.setState({ users });
  }


  /**
  * getPearsonListRender function 
  * Making call to get the person list render
  */
  getPearsonListRender() {
    // const { classes } = this.props;
    return (
      <div>
        {this.state.users.length > 0 ?
          <SortableButton sort={() => this.handleSortButtonClick()} sortStatus={this.state.sort} /> :
          <p className="empty-user-list">User list is empty. Kindly reload the page.</p>
        }
        <div className="user-list-box">
          <ul>
            {
              this.state.users.map((user) => {
                return (
                  <PearsonUser key={user.id} user={user} removeUser={() => this.removeUser(user.id)} />
                );
              })
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
    let componentData = '';
    if (this.state.dataLoaded === false) {
      componentData = <Loader />
    } else {
      componentData = this.getPearsonListRender();
    }
    return componentData;
  }



  /**
  * react render function - render
  * Rendering view to the dom
  */


  render() {
    // const { classes } = this.props;
    return (
      <div >
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



export default PearsonUsers;