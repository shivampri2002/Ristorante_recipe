import { useState } from 'react';
import { Card ,CardImg ,CardImgOverlay ,CardText ,CardBody ,CardTitle } from 'reactstrap';


export default function MenuComponent( {dishes} ) {

  const [selectedDish,setSelectedDish]=useState(null);

  const menu=dishes.map((dish) => {
    return (
      <div id={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={()=> setSelectedDish(dish)} >
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  function renderDish(dish){
    if(dish!=null){
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        );
    }
    else{
      return (
        <div></div>
        );
    }
  }

  return (
  <div className='container'>
    <div className='row'>
        {menu}
    </div>
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        {renderDish(selectedDish)}
      </div>
    </div>
  </div>
  );
}
