import React from 'react'
 import List from './List'
 import Friend from './Friend'
 import Form from './Form'
 import PersonInput from './PersonInput'
 import axios from 'axios';
 class App extends React.Component {
constructor()  {
    super();
    this.state = { friends :[

    ]
        


    }

    
    
//   this.handleChange = e => {
//         this.setState({... e.target.value})
//     }   

}  

// deleteFriend = (e)=> {
//     e.preventDefault()
//     axios
//     .delete('http://localhost:5000/friends/:id' )
//     .then(res=> console.log(res))
//     .catch(err => console.log(err));
// }
  resetFriendState =( ) => {
     axios
    .get('http://localhost:5000/friends')
        .then(response =>{
            this.setState( () => ({friends: response.data}));
            // console.log(response.data)
        })
        .then ( response => {
            console.log(this.state)
        })
        
        .catch(error => {
            console.error('Server Error', error)
        });
}
remove = (i) => {
    let data = this.state.friends;
    data.splice(i,1);
    console.log('YO MOFO!!')
    this.setState({
        friends: data
    })
}
 componentDidMount(){
      this.resetFriendState()
 }


render (){
    return (

      <div>
          {/* <List/> */}
          {/* <Form OnSubmit ={this.handleChange}/> */}
          <PersonInput reset ={this.resetFriendState}/>
           <List reset = {this.resetFriendState} friends ={this.state.friends}/>
      </div>
    )
}

}
export default App