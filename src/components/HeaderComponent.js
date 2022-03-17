import { Card } from 'reactstrap';

export default function HeaderComponent(){
	return (
		<>
			<div className="header">
				<Card className="card">
					<div className="container">
						<div className="row row-header">
							<h1>Ristorante Con Fusion</h1>
							<p>We take inspiration from the best of the worlds dishes.</p>
						</div>
					</div>
				</Card>
			</div> 
		</>
	);
}