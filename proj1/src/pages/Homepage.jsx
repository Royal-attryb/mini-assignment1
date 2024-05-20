import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/Homepage.css';
import CardsList from '../components/CardsList.jsx';
import Navbar from '../components/NavBar.jsx';

export default function Homepage () {

    const pages = [1, 2, 3];
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([]);
    const [items, setItems] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://server-wheat-eight.vercel.app/get_cars', {  
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
                <Navbar items={items}/>
                <CardsList data={data} onItemCountChange={(val) => {if(val) setItems(items + 1)}}/>
                <div className='page-selector'>
                    {pageNumber > 1 && <button className='pagerange' onClick={() => setPageNumber(((pageNumber - 1) === 0) ? 3 : (pageNumber - 1))}>PREV</button>}
                    {pages.map((pagenum) => <button className={`page ${pagenum === pageNumber ? 'active' : ''}`} onClick={() => setPageNumber(pagenum)}>{pagenum}</button>)}
                    {pageNumber < 3 && <button className='pagerange' onClick={() => setPageNumber(((pageNumber + 1) === 4) ? 1 : (pageNumber + 1))}>NEXT</button>}
                </div>
            </div>
    );
}
