import React, {useState, useEffect} from 'react';
import CardComponent from './cardcomponent';
import './card.css';

const Card = () => {

    const [state, setState] = useState();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw response
        }).then(
            data => {
                setState(data);
                setloading(true);
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }, [])

    return(
        <div className='container'>
            {loading ? state.data.map((element) => <CardComponent key={element.id} avatar={element.avatar} first_name={element.first_name} last_name={element.last_name} email={element.email}/> ): null}
            
        </div>
    )
}

export default Card;