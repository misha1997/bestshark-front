import { useState } from 'react';
import styles from './message.module.css'

export default function Message(props){
    let newProps = props.props;

    //Пока для просто проверки

    let [userName, setUserName] = useState("janstay");

    // Когда данные будут приходить с бэка, нужно будет использовать 
    // модульные стили, чтобы отображать статуси игроков.

    // Для даты нужно будет написать потом функцию, которая
    // будет преобразовывать время с бэка в нужный формат для дизайна

    return(
        <div className={`${styles.main}`}>
            <img className={`${styles.avatar}`} src={newProps.avatar} width={'40px'}></img>
            <div className={`${styles.content}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.name}`}>
                        <h2>{newProps.name}</h2>
                        {userName === newProps.name ? <h3 className={`${styles.me}`}>me</h3> : <h3>{newProps.perk}</h3>}
                    </div>
                    <div className={`${styles.time}`}>{newProps.time}</div>
                </div>
                <div className={`${styles.message}`}>
                    <h3>{newProps.message}</h3>
                </div>
            </div>
        </div>
    );
}