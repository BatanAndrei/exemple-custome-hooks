import styles from './withUseFetch.module.css';
import useFetch from '../../hooks/useFetch';


const WithUseFetch = () => {
    const data = useFetch(`https://rickandmortyapi.com/api/character/`, {method: "GET"});
    let result = data?.response?.results;
    
    return (
        <div className={styles.container}>
            {result?.map((item, index) => 
                <h4 key={index}>{index +1}) {item.name}</h4>
            )}
        </div>
    )
};

export default WithUseFetch;