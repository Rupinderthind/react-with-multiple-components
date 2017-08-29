import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://www.material-ui.com/images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

class MaterialCon extends React.Component {
    constructor(props) {
      super(props);
      this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

   	render() {
      return (
        <div>
            <AppBar
              title="Title"
              onLeftIconButtonTouchTap={this.handleToggle}
              iconElementRight={<Logged />}
            />
            <Drawer open={this.state.open}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
            <CardExampleWithAvatar />
        </div>
      );
   	}
}
export default MaterialCon;