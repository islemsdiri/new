
import {Card} from 'react-bootstrap'
const List=(props)=>{
    return(
       
       
<div>
             {console.log(props)}
        <p>Liste Commponent</p>
{
props.Movies.map(el=>( <div><Card style={{ width: '18rem' }} key={props.Movies.index} className="box">
<Card.Image variant="top"  src={props.Movies.Image}/>
<Card.Body>
<Card.Title>{props.Movies.Title}</Card.Title>
<Card.Text> {props.Movies.Text}</Card.Text>
<Card.postulerurl> {props.Movies.postulerurl}</Card.postulerurl>
<Card.rating> {props.Movies.rating}</Card.rating>

</Card.Body>
</Card>
</div>) )
}
</div>
       
    )
}
//<Button variant="primary">URL</Button>
export default List