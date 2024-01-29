import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/Homepage.css';
import CardsList from '../components/CardsList.jsx';

export default function Homepage () {

    const pages = [1, 2, 3];
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3001/get_cars', {  
                params: {pagenum: pageNumber}
            });
        
                setData(response.data);
                console.log(response.data);
            }
    
            catch (error) {
              console.log(error);
            }
        }
        
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pageNumber]);

    return (
        <div className='homepage-wrapper'>
            <CardsList data={data}/>
            <div className='page-selector'>
                <button className='page' onClick={() => setPageNumber(((pageNumber - 1) == 0) ? 3 : (pageNumber - 1))}>&lt;</button>
                {pages.map((pagenum) => <button className={`page ${pagenum === pageNumber ? 'active' : ''}`} onClick={() => setPageNumber(pagenum)}>{pagenum}</button>)}
                <button className='page' onClick={() => setPageNumber(((pageNumber + 1) == 4) ? 1 : (pageNumber + 1))}>&gt;</button>
            </div>
        </div>
    );
}
