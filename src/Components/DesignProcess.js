import React, { Component } from 'react';
import ProcessBlock from './ProcessBlock'
import { Droppable } from 'react-beautiful-dnd';

class DesignProcess extends Component {


  render() {
    let processBlocks;


    if(this.props.processBlocks !== 'undefined'){
      processBlocks = this.props.processBlocks.map((block, index) => {
       if(block !== 'undefined')
        {
          return <ProcessBlock key={block.id} item={block} index={index} />
        }
      }) 
     }
 return (
      <div className="DesignProcess col-lg-3 col-md-3 col-sm-6 col-6">
        <div className="panel">
          <div className="panel-header"><p>Your Design Process</p></div>
          <div className="panel-block-area">  
            <Droppable droppableId="designProcess">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} >
                  {processBlocks}
                </div>
              )}
            </Droppable>
          </div>  
        </div>
      </div>
    );
  }
}

export default DesignProcess;
