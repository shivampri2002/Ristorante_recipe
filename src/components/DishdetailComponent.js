import { Card ,CardImg ,CardImgOverlay ,CardText ,CardBody ,CardTitle } from 'reactstrap';

export default function DishdetailComponent({dish}){

	function renderComments(commentS){
		if(commentS!=null){
			const commentDis=commentS.map((com)=> (
							<li key={com.id.toString()}>
								<p>{com.comment} <br/><br/>--{com.author} ,{new Date(com.date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})}</p>
							</li>
						));
			return (
				<div>
					<h4>Comments</h4>
					<ul className="list-unstyled">
						{commentDis}
					</ul>
				</div>
				);
		}
		else{
			return (
				<div></div>
				);
		}
	}

	if(dish!=null){
		return (
			<div id="dish_comment_detail" className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
			          <CardImg top src={dish.image} alt={dish.name} />
			          <CardBody>
			            <CardTitle>{dish.name}</CardTitle>
			            <CardText>{dish.description}</CardText>
			          </CardBody>
		        	</Card>
				</div>		
				<div className="col-12 col-md-5 m-1">
					{renderComments(dish.comments)}
				</div>
			</div>
			);
	}
	else{
		return (
			<div></div>
			);
	}
}