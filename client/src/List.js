import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Friend from './Friend'
 
  class List extends Component{
    constructor (props){
        super(props)
        this.state = {
            // friends: this.props.friends
            friends : []
        }
    }


        // this.addToList = e => {
        //     const newList = this.state.friends;
        //     newList.push(e);
        //     this.setState({newList})

    //     // }
    // };

    // // this.add = (e, item)=> {
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/friends', item)
        
    // }
 
    // componentDidMount(){
    //     axios
    //     .get('http://localhost:5000/friends')
    //         .then(response =>{
    //             this.setState( () => ({friends: response.data}));
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.error('Server Error', error)
    //         });
    // }
      
   componentDidMount (){
       console.log(this.props.friends)
       this.setState( () => { friends: this.props.friends})
   }
    
    //  add = (e, item)=> {
    //     e.preventDefault();
    //     axios
    //     .post('http://localhost:5000/friends', item)
    //     .then(res => {
    //         this.setState ({ friends: res.data})
    //      }) 
    
    // .catch (err => console.error(err));
  
    // }


    remove = (i) => {
        let data = this.state.friends;

        let guy = data.find(function (e){
            return e.name === i
        });
        data.splice(guy,1);

        console.log('YO !!',guy )
        this.setState({
            friends: data
        })
    }

    deleteFriend = (e, id)=> {
         console.log("HAY!!",e.id)
         e.preventDefault()
          axios
        .delete(`http://localhost:5000/friends/${id}` )
        .then(res =>
                 {
                    
                    this.setState ({name: ''})
                 }
 
                 ) 
 
         .catch(err => console.log(err));
    }
     

    update = (e, item)=> {
        e.preventDefault();
        axios.put('http://localhost:5000/friends', item.id)
        .then (res => {
            friends: res.data
         
        this.props.history.push('./List');
    })
    .catch(err => console.error(err));
    };
    // handleChange = e => {
    //     this.setState({Friend: e.target.value})
    // }
    render(){
         return (
            <div> 

                {this.props.friends.map (friend => (
                    <Friend key= {friend.id}
                     friend={friend}
                      name = {friend.name}
                      age ={friend.age}
                      email ={friend.email}
                       remove={this.deleteFriend}/>
                ))}
            </div>
        )
    }
}

 
 export default List