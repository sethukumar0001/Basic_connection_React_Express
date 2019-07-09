import React from 'react';
export default class select extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			data:[]
		};
    };
  componentDidMount() {
    fetch('http://localhost:5000/backend/userlist')
      .then(res => res.json())
      .then(members => this.setState({ data: members.data }));
  }

  render(){
      console.log(this.state.data);
    return (
        <div >
       
          {this.state.data.map(member =>
            <div key={member.id}>{member.firstname} {member.lastname} - {member.email}</div>
          )}
        </div>
    );
  }
}
