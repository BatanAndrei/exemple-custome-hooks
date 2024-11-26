import styles from './withUseClick.module.css';
import { useState, useRef, useCallback } from 'react';
import useClickInside from '../../hooks/useClickInside';
import useClickOutside from '../../hooks/useClickOutside';

const WithUseClick = () => {
    const insideRef = useRef(null);
    const outsideRef = useRef(null);
    const [insideCount, setInsideCount] = useState(0);
    const [outsideCount, setOutsideCount] = useState(0);
    

    const insideCb = useCallback(() => {
        setInsideCount((c) => c + 1);
    }, []);

    const outsideCb = useCallback(() => {
        setOutsideCount((c) => c + 1);
    }, []);

    /* const insideCb = () => {
        setInsideCount((c) => c + 1);
    };

    const outsideCb = () => {
        setOutsideCount((c) => c + 1);
    }; */

    useClickInside(insideRef, insideCb);
    useClickOutside(outsideRef, outsideCb);

    return (
        <div className={styles.containerStyles}>
            <div className={styles.wrapperStyles}>
                <div ref={insideRef} className={styles.boxStylesInside}>Inside</div>
                <p className={styles.textStyles}>Count: {insideCount}</p>
            </div>
            <div className={styles.wrapperStyles}>
                <div ref={outsideRef} className={styles.boxStylesOutside}>Outside</div>
                <p className={styles.textStyles}>Count: {outsideCount}</p>
            </div>
        </div>
    );
};

export default WithUseClick;