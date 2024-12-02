import styles from './withUseFetch.module.css';
import useFetch from '../../hooks/useFetch';
import { useRef } from 'react';
import useClickInside from '../../hooks/useClickInside';
import useLocalStogage from '../../hooks/useLocalStorage';


const WithUseFetch = () => {

    const data = useFetch(`https://rickandmortyapi.com/api/character/`, {method: "GET"});
    const result = data?.response?.results;
    const ref = useRef(null);
    const [changeColor, setChangeColor] = useLocalStogage("colorRed", false);

    const handleChangeColor = () => {
        setChangeColor((prev) => !prev);
    };

    useClickInside(ref, handleChangeColor)
    
    return (
        <div className={styles.container}>
            {result?.map((item) => 
                <h4 className={changeColor && styles.color} key={item.id}>{item.id}) {item.name}</h4>
            )}
            <button className={styles.button} ref={ref}>Click me</button>
        </div>
    )
};

export default WithUseFetch;