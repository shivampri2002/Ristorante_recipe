import { useState } from 'react';
import DishdetailComponent from './DishdetailComponent';
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
        <DishdetailComponent dish={dish} />
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
    <div>
      {renderDish(selectedDish)}
    </div>
  </div>
  );
}
