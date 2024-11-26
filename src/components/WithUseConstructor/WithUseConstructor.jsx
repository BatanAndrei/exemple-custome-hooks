import styles from './withUseConstructor.module.css';
import UserConstructor from '../../hooks/useConstructor';


const WithUseConstructor = () => {

    const user = new UserConstructor("Andrei", 43);
    const user2 = new UserConstructor("Vika", 36);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>{user.name}</div>
                <div>{user.age}</div>
                <div>{user.sayHello()}</div>
            </div>
            <div className={styles.wrapper}>
                <div>{user2.name}</div>
                <div>{user2.age}</div>
                <div>{user2.sayHello()}</div>
            </div>
        </div>
    )
};

export default WithUseConstructor;