import { useEffect } from 'react';
import styles from './MyModal.module.css';

const MyModal = (props) =>{

    const {title,message,closeModal,...otherprops} = props;
    
    useEffect(()=>{
        document.body.style.overflowY='hidden';
        return () =>{
            document.body.style.overflowY='scroll';
        }
    },[])

    

    return <>
    <div className={styles.modalWrapper} onClick={closeModal}></div>
    <div className={styles.modalContainer}>
        <h3>{title}</h3>
        <p>{message}</p>
        <button className={styles.closeButton}onClick={closeModal}>OK</button>
    </div>
    </>
    
}

export default MyModal;