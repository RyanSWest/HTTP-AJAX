import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Friend from './Friend'
import List from './List'
import App from './App'
import'./index.css'

  class PersonInput extends Component{
    constructor (props){
        super(props)
        this.state = {
            friends: [  
                
            ]
        };
    }

       handleChange = e => {
        console.log({[e.target.name]: e.target.value })
        console.log()

             this.setState({[e.target.name]: e.target.value });
             // console.log( '888',this.state.friends)
            // e.persist();
            // let value = e.target.value;
            // this.setState(prevState => ( {
            //     user: {
            //         ...prevState.name,
            //         [e.target.name]: value
            //     }
            // }))
        };
        handleChange2 = e => {
            this.setState({  age: e.target.value });
            
        };
        handleChange3 = e => {
            this.setState({  email: e.target.value });
             
        };
        
        add = (e, item)=> {
            e.preventDefault();
            axios
            .post('http://localhost:5000/friends', item)
            .then(res => {
                this.setState ({ friends: res.data })
             }) 
        
        .catch (err => console.error(err));
      
        }  
        
        handleSubmit = e => {
            e.preventDefault ();
                this.setState ({
                     
                    
                })
 
           
                
            const user = {
                name: this.state.name ,
                age: this.state.age,
                email: this.state.email
            }
           
            axios
            .post('http://localhost:5000/friends', user)
                .then(response =>{
                     
                    //  console.log(response.data)
                     console.log(user)
                })
                .then ( response => {
                    console.log("reset Triggered")
                    this.props.reset()
                })
                .catch(error => {
                    console.error('Server Error', error)
                });
        }

      deleteFriend = ()=> {
          axios
          .delete('http://localhost:5000/friends/:id' )
          .then(res=> console.log(res))
          .catch(err => console.log(err));
      }
   
 
        
    
 
    render(){
        return (
             <form className ='Form'
                 onSubmit = {this.handleSubmit}>
                 <label className = 'Label'>
                      Name: 
                     <input type ='text' 
                     name = 'name'
                      onChange = {this.handleChange}
                      value = {this.state.friends.name}/>
                     Age:
                     <input type ='text'
                      name = 'age' 
                      onChange = {this.handleChange}
                       value = {this.state.friends.age}/>
                     Email:
                     <input type ='text'
                      name = 'email' 
                      onChange = {this.handleChange}
                       value = {this.state.friends.email}/>


                     </label>
                     <button type= 'submit'
                        >add </button>
                 </form>
        )
    }
}
  
 export default PersonInput