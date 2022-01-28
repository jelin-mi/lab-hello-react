import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="icon"/>
            <div className='card-copy'>
              <h3>{props.title}</h3>
              <p>{props.desc}</p>  
            </div>
            
        </div>
    );
}

export default Card;