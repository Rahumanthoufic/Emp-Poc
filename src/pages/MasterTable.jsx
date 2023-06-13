import react, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Datatable from './Datatable';

function MasterTable() {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((res) =>{
            setPosts(res.data.products);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
 
    return <Datatable items = {post}/>;
}

export default MasterTable;
