import React, { Component } from 'react';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import ResearchAndMethodology from './Components/ResearchAndMethodology';
import DesignProcess from './Components/DesignProcess';
import CaseStudy from './Components/CaseStudy';
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import HelperText from "./Components/HelperText";
import Footer from "./Components/Footer";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
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

  destClone.splice(droppableDestination.index, 0, removed);

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
      }
    ]});

    this.setState({ designProcessBlocks: [
      {
        id: 3,
        title: "Block 3",
        contentTitle: "Process 3",
        content: "Blah blah blah 3"
      },
      {
        id: 4,
        title: "Block 4",
        contentTitle: "Process 4",
        content: "Blah blah blah 4"
      },
      {
        id: 5,
        title: "Block 5",
        contentTitle: "Process 5",
        content: "Blah blah blah 5"
      },
      {
        id: 6,
        title: "Block 6",
        contentTitle: "Process 6",
        content: "Blah blah blah 6"
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
    }
  }

  scrollToAppArea = () => {
    document.getElementById('app-area').scrollIntoView();
}

  render() {
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
