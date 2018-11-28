import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://i5.walmartimages.com/asr/eeed5fd7-0270-4177-8fa1-8c32f79fd5e5_1.7ddf76f0762297b916c12a4bf08b3015.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    DXRacer OH/RB1/N Series High-Back Racing Chair For Gaming Or
                    Office Use
                  </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`} </strong>
                      <br />
                      <strong className="price-strike">
                        {`$${this.props.price}`}
                      </strong>
                    </Col>
                    <Col md={6}>Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
