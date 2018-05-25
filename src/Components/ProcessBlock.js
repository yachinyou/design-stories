import { Draggable } from 'react-beautiful-dnd';
import InfoModal from './InfoModal'
import React, { Component } from 'react';
import InfoIcon from "../Images/info_icon.png";

class ProcessBlock extends Component {
  constructor(props) {
    super(props);

    this.handleInfoClick = this.handleInfoClick.bind(this);
  
  }

  handleInfoClick(e){
    this.infoWindow.toggle();
  }

  render() {
    //console.log(this.props);
    let item = this.props.item;
    let index = this.props.index;
/*     console.log('****************');
    console.log(index);
    console.log('****************'); */
    return (
      <Draggable
          key={item.id}
          draggableId={item.id}
          index={index}>
          {(provided, snapshot) => (
              <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
                  <div className="draggable">
                      <div className="draggable-title">{item.title}</div>
                      <div className="draggable-actions float-right">
                        <a href="#" onClick={this.handleInfoClick}><img src={InfoIcon} /></a>
                      </div>
                  </div>
                  <InfoModal ref={info => this.infoWindow = info} data={item}/>
              </div>
          )}
      </Draggable>
    );
  }
}

export default ProcessBlock;
