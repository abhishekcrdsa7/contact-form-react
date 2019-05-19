import React,{ Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import UserForm from '../UserForm/UserForm.js';

export default class App extends Component {

 render() {
     return(
         <div>
             <Header/>
             <img id="bannerImage" src="https://images.sharefaith.com/images/3/1473711383512_13/img_mouseover3.jpg" alt="banner"/>
             <div id="clipImg">
                 <div>
                     <p id="clipImgText" style={{fontSize: "1rem"}}>
                         What is Lorem Ipsum?<br/><br/>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/><br/>
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/><br/>
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     </p>
                 </div>
                 <div>
                     <img src="https://images.pexels.com/photos/2265482/pexels-photo-2265482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="main"/>
                 </div>
             </div>
             <div style={{display: 'flex', justifyContent: 'space-around'}}>
                 <i className="fas fa-quote-left" style={{color: "#F1F1F1", fontSize: "80px"}}/>
                 <span style={{color: 'blue'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
                 <i className="fas fa-quote-right" style={{color: "#F1F1F1", fontSize: "80px"}}/>
             </div>
             <div id="aboveForm">
                 <div style={{paddingTop: "25vh", width: "50vw", marginLeft: "25%"}}>
                     <div style={{ display: "flex", justifyContent: "flex-end"}}>
                         <h1 style={{color: "blue", paddingRight: "2vw"}}>Receive<br/> Monthly Reports</h1>
                         <img id="imgDownOne" src="https://images.pexels.com/photos/2311868/pexels-photo-2311868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="donwnone" />
                     </div>
                     <div style={{ display: "flex", justifyContent: "flex-start"}}>
                         <img id="imgDownTwo" src="https://images.pexels.com/photos/2311868/pexels-photo-2311868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="donwntwo" />
                         <h1 style={{color: "blue", paddingLeft: "2vw"}}>Easy<br/> Integretion</h1>
                     </div>
                 </div>
             </div>
             <UserForm/>
         </div>
     );
 }
}


