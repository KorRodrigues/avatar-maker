import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class TemplateListItem extends Component {
  localAddToCanvas = (e) => {
    e.preventDefault();
    const {
      addToCanvas,
      property_type,
      zIndex
    } = this.props;
    addToCanvas(e.target, property_type, zIndex);
  }

  render() {
    const {
      localAddToCanvas,
      props: {
        url: {
          default: url
        },
      }
    } = this;

    return(
      <Col xs={6} md={4} >
        <a className="thumbnail" onClick={localAddToCanvas}>
          <img alt ="" src={url} />
        </a>
      </Col>
    );
  }
}