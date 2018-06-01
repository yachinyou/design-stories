import React, { Component } from 'react';
import './App.css';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import ResearchAndMethodology from './Components/ResearchAndMethodology';
import DesignProcess from './Components/DesignProcess';
import CaseStudy from './Components/CaseStudy';
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import HelperText from "./Components/HelperText";
import Footer from "./Components/Footer";

import update from 'react-addons-update';


import Demo from "./Components/Demo";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 0);
  result.splice(endIndex, 0, removed);

  return result;
};



/**
* Moves an item from one list to another list.
*/
const move = (source, destination, droppableSource, droppableDestination) => {

  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  const d =destClone.splice(droppableDestination.index, 0, removed);

  console.log('***************');
  console.log(sourceClone);
  console.log(destClone);
  console.log(removed);
  console.log(d);
  console.log('***************');


  const result = {};

  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;

};

class App extends Component {

  constructor(){
    super();
    this.state = {
      researchProcessBlocks: [],
      designProcessBlocks: []
    };

    this.id2List = {
      researchAndMethod: 'researchProcessBlocks',
      designProcess: 'designProcessBlocks'
    };

    this.getList = this.getList.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentWillMount(){
    this.setState({ researchProcessBlocks: [
     
      {
        id: 0,
        title: "Block 1",
        contentTitle: "Process 1",
        content: "Blah blah blah 1"
      },
      {
        id: 1,
        title: "Block 2",
        contentTitle: "Process 2",
        content: "Blah blah blah 2"
      },
     

    ]});

    this.setState({ designProcessBlocks: [
      {
        id: 3,
        title: "Block 3",
        contentTitle: "Design Case",
        content: "Describe what the destgu project IS about In a short paragraph Outhue the product."
      },
      {
        id: 4,
        title: "Block 4",
        contentTitle: "Problem Statement",
        content: "A problem statement is a concise description of an issue to be addressed or a condition to be improved upon. ... The first condition of solving a problem is understanding the problem, which can be done by way of a problem statement."
      },
      {
        id: 5,
        title: "Block 5",
        contentTitle: "Current Solutions",
        content: "Current Solutions brings OEM Power Sources to the manufacturers of the Southeastern United States. Via exclusive representation, we offer expert product support and technical assistance to the benefit of all parties. We support our customer’s needs with years of market knowledge, technical expertise, and integrity. We believe that professional manufacturers’ representatives are the best way to bring a product to the OEM market."
      },
      {
        id: 6,
        title: "Block 6",
        contentTitle: "User Interviews",
        content: "User interviews can be a great way to extract information from users for user experience understanding, usability understanding and ideation. They are cheap and easy to conduct and can be readily conducted by anyone who can ask questions and record the answers."
      }
    ]})
  }

  getList(id){
    return this.state[this.id2List[id]];
  }

  onDragEnd(result){

    const { source, destination } = result;


  

    // dropped outside the list
    if (!destination) {
      return;
    }

;

    if (source.droppableId === destination.droppableId) {
     const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === 'designProcess') {
        this.setState({ designProcessBlocks: items });
      }else{
        this.setState({ researchProcessBlocks: items });
      }
    } else {
      
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

     
      this.setState({
        researchProcessBlocks: result.researchAndMethod,
        designProcessBlocks: result.designProcess
      });
      

    


     if(result.researchAndMethod.length == '2')
     {
        for(var i=0; i < result.researchAndMethod.length; i++) {
          if(this.state.researchProcessBlocks[i].id == "7"){
            if(this.state.researchProcessBlocks.splice(i,1)){
                this.setState({
                  researchProcessBlocks:this.state.researchProcessBlocks
                });
                return;
              }
            }
        }
      }
    
       if(result.designProcess.length == '2' &&  result.designProcess[0] !== '')
      {
       
         for(var i=0; i < result.designProcess.length; i++) {
           if(this.state.designProcessBlocks[i].id == "8"){
    
               if(this.state.designProcessBlocks.splice(i,1)){
                 
                 this.setState({
                  designProcessBlocks:this.state.designProcessBlocks
                 });
                 return;
               }
             }
         }
       }
 


    }
  }


  scrollToAppArea = () => {
    document.getElementById('app-area').scrollIntoView();
}

  render() {

   
      
        if(this.state.researchProcessBlocks == '')
        {this.setState({
                     researchProcessBlocks:[{ id:7,  title:"Empty Block",  }]
                       });
        }
        if(this.state.designProcessBlocks == '')
        {
          this.setState({
              designProcessBlocks:[ { id:8, title:"Empty Block" }]
                       });
         }



    return (
      <div className="App">
        <NavBar />
        <Hero click={this.scrollToAppArea}/>
        <div id="app-area">
          <div className="container">
            <HelperText />
            <div className="row">
              <DragDropContext onDragEnd={this.onDragEnd}>
                <ResearchAndMethodology processBlocks={this.state.researchProcessBlocks} />
                <DesignProcess processBlocks={this.state.designProcessBlocks} />
              </DragDropContext>
              <CaseStudy processBlocks={this.state.designProcessBlocks} />
            </div>
          </div>
        </div>  
       
        <Footer />
      
      </div>
    );
  }
}

export default App;
