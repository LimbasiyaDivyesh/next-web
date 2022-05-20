import Button from "@mui/material/Button";
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'
import axios from "axios";
import {useEffect, useState} from "react";

const BlogHome = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1234/').then(r => setUsers(r.data));
    }, []);

    const router = useRouter();

    const handaleAddBlog = async (Blog) => {
        await router.push(`/Components/Blog/${Blog}`)
    };
    const handaleDetails = async (index) => {
        await router.push(`/Components/${index}`)
    };
    const handaleDelete = async (id) => {
        await axios.delete(`http://localhost:1234/delete/${id}`);
        await axios.get('http://localhost:1234/').then(r => setUsers(r.data));
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.listblog}>
                    {users !== null && users.length === 0 ? <Button
                        onClick={() => handaleAddBlog('Add_Blog')}
                        className={styles.authorButton}
                        type='button'
                        variant="contained"
                    >
                        Add Blog
                    </Button> : ''}
                    {
                        users !== null && users.length > 0 && users.map((d, i) => (
                            <div style={{marginTop: '10px'}} key={i}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <h3 style={{display: 'flex', flexDirection: 'row'}}>
                                        <span id='title'>{i + 1}. </span>
                                        <div className={styles.blogtitle}><b style={{cursor: "pointer"}} onClick={() => handaleDetails(i)} >{d.title} </b></div>
                                    </h3>
                                    <div className={styles.readmore}
                                         onClick={() => handaleDelete(d._id)}> {"Delete Blog"}
                                    </div>
                                </div>
                                <div className={styles.blogdet}>
                                    <p> {d.blog_details} </p>
                                </div>
                                <div className={styles.readmore}
                                     onClick={() => handaleDetails(i)}> {"View Details"}  </div>
                                <div className={styles.editblog}
                                     onClick={() => router.push(`/Components/Blog/${d._id}`)}> {"Edit Blog"}  </div>
                            </div>
                        ))}
                    <div className={styles.blogdet}> {users !== null && users.length === 0 ? "No Data" : ''} </div>
                </div>


            </div>
        </>
    )
}
export default BlogHome;