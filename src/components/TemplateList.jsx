import React, { Component } from 'react';
import TemplateListItem from './TemplateListItem';

export default class TemplateList extends Component{
  render(){
    const {
      property_type,
      zIndex,
      addtocanvas,
      data: results,
    } = this.props;

    const templates = results.map((item) =>
      <TemplateListItem 
        url={item}
        property_type={property_type} 
        zIndex={zIndex} 
        addToCanvas={addtocanvas}
        key={item}
      />
    );

    return(
      <div className="row">
        {templates}
      </div>
    );
  }
}