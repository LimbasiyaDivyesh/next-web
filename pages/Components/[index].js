import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import {useEffect, useState} from "react";
import axios from "axios";

const Details = () => {

    const router = useRouter();
    const { index } = router.query;
    const [users, setUsers] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:1234/').then(r => setUsers(r.data[index]));
    }, []);

    const handaleBack = () => {
        router.push('/')
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.listblog}>
                    {
                        <div>
                            <h3>
                                <span className={styles.blogtitle}> <b>{users?.title} </b> </span>
                            </h3>
                            <div className={styles.blogdet}>
                                <p> {users?.blog_details}
                                    <p>      <p>  <h6> More Details </h6></p>
                                        {users?.details}
                                    </p>
                                </p>
                            </div>
                            <div className={styles.readmore} onClick={handaleBack}> {"Back"}  </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default Details;