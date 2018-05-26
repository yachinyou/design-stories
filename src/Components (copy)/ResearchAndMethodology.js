import React, { Component } from 'react';
import ProcessBlock from './ProcessBlock'
import { Droppable } from 'react-beautiful-dnd';

class ResearchAndMethodology extends Component {
  render() {
    let processBlocks;
    if(this.props.processBlocks){
      processBlocks = this.props.processBlocks.map((block, index) => {
        return <ProcessBlock key={block.id} item={block} index={index} />
      })
    }

    return (
      <div className="ResearchAndMethodology col-lg-3 col-md-3 col-sm-6 col-6">
        <div className="panel">
          <div className="panel-header"><p>Methodologies and Research</p></div>
          <div className="panel-block-area">  
            <Droppable droppableId="researchAndMethod">
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

export default ResearchAndMethodology;
