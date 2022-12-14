import React, { Component } from 'react';

class AddList extends Component {


  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
      if(this.refs.id.value === '') {
        alert('Title is required');
      } else {
        this.setState({newList: this.refs.id.value}, function() {
          this.props.addList(this.state.newList);
        });
      }
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID'></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
