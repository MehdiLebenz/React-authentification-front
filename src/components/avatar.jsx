import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import avatar from '../img/avatar.png';
import me from '../graphql/user';
import Modal from 'react-awesome-modal';
import nom from '../img/nom.jpg'

class imageAvatars extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClose = () => {
    console.log('tyest');
    const { open } = this.state;
    this.setState({
      open: !open
    })
  }

  render(){
    const { open } = this.state;
    if (this.props.data.loading) return <p>loading...</p>
  const { userName } = this.props.data.me;
  const {position} = this.props.data.me;
  const {email} = this.props.data.me;
  const {experience}= this.props.data.me;
    return (
      <div>
      <Grid container justify="center" alignItems="center" onClick={this.handleClose}>
        <Avatar alt="Remy Sharp" src={avatar}/>
         { userName }
      </Grid>
      
      <Modal visible={open} width="400" height="600" effect="fadeInUp" onClickAway={this.handleClose}>
                    <div className="poup">
                        <img alt="nom" width="100" height="100" src ={nom}></img>
                        <p>{userName}</p>
                        <p>Email : {email}</p>
                        <p>Poste Actuel :{position}</p>
                        <p>Année d'éxpérience : {experience}</p>
                        <p onClick={this.handleClose}>Close</p>
                    </div>
      </Modal>
      </div>
    );
  }
}



export default graphql(me)(imageAvatars);
