import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Queue from './components/Queue.jsx';
import Chat from './components/Chat.jsx'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueData:'',
      immediatePrioity:[],
      highPrioity:[],
      mediumPrioity:[],
      lowPrioity:[],
      toQueueData:'',
      clientName: ''
    }
  }

  handlePrioityClick = (val) => {
    let toQueueData;
    if (val === '1'){
      toQueueData = 'immediatePrioity';
    }
    if (val === '2'){
      toQueueData = 'highPrioity';
    }
    if (val === '3'){
      toQueueData = 'mediumPrioity';
    }
    if (val === '4'){
      toQueueData = 'lowPrioity';
    }
    this.setState({toQueueData:toQueueData})
  }

  handleChatClick = (val) => {
    this.setState({clientName:val})
  }

  componentDidMount () {
    // setInterval(()=>{
    //   axios.get('http://localhost:9000/pendingusers')
    //   .then(data=>{
    //     this.setState({queueData:data.data}
    //       )
    // })}, 5000);
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onmessage = (data) => {

      const parsedData = JSON.parse(data.data);
      if (parsedData.queue){
        let {queue} = parsedData;
        let lowPrioityArr = [];
        let mediumPrioityArr = [];
        let highPrioityArr = [];
        let immediatePrioityArr = [];

        for(let key in queue){
          if (queue[key].severity >= 1 && queue[key].severity < 25){
            lowPrioityArr.push({...queue[key], id:key})
          }
          if (queue[key].severity >= 25 && queue[key].severity < 50){
            mediumPrioityArr.push({...queue[key], id:key})
          }
          if (queue[key].severity >= 50 && queue[key].severity < 75){
            highPrioityArr.push({...queue[key], id:key})
          }
          if (queue[key].severity >= 75 && queue[key].severity <= 100){
            immediatePrioityArr.push({...queue[key], id:key})
          }
        }
        this.setState({
          immediatePrioity:immediatePrioityArr,
          highPrioity:highPrioityArr,
          mediumPrioity:mediumPrioityArr,
          lowPrioity:lowPrioityArr
        })

        this.setState({queueData:queue.data});
        // let toQueueData=this.state.immediatePrioity;
        // this.setState({toQueueData:toQueueData});
      }
    }
    // axios.get('http://localhost:9000/pendingusers')
    // .then(queue=>{
    //   for(let key in queue.data){
    //     if (queue.data[key].severity >= 1 && queue.data[key].severity < 25){
    //       this.state.lowPrioity.push({...queue.data[key], id:key})
    //     }
    //     if (queue.data[key].severity >= 25 && queue.data[key].severity < 50){
    //       this.state.mediumPrioity.push({...queue.data[key], id:key})
    //     }
    //     if (queue.data[key].severity >= 50 && queue.data[key].severity < 75){
    //       this.state.highPrioity.push({...queue.data[key], id:key})
    //     }
    //     if (queue.data[key].severity >= 75 && queue.data[key].severity <= 100){
    //       this.state.immediatePrioity.push({...queue.data[key], id:key})
    //     }
    //   }
    //   this.setState({queueData:queue.data});
    //   let toQueueData=this.state.immediatePrioity;
    //   this.setState({toQueueData:toQueueData});
    // })
  }

  render() {
    return (
      <div className="App">
          <NavBar Data={this.state} onClick={this.handlePrioityClick}/>
<<<<<<< HEAD
          <Queue 
            Data={this.state}
            showDataKey={this.state.toQueueData} 
=======
          <Queue
            Data={this.state.toQueueData}
            clientName={this.handleChatClick}
>>>>>>> cf2a4bbd21075c2d24264e481627f7102c1fd18b
          />
          <Chat clientName={this.state.clientName}/>
      </div>
    );
  }
}

export default App;


