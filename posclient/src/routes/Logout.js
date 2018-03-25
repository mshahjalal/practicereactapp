import React from 'react';

class Logout extends React.Component {
 
  onSubmit = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    try {
      this.props.history.push('/login');
    } catch (err) {
      return false;
    }
  };

  render() {

    return (
      <div>
          <button onClick={this.onSubmit} className="btn btn-danger">Logout</button>
      </div>
    );
  }
}

export default Logout;
