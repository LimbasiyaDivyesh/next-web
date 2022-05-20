import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Card, CardContent } from '@mui/material';
import styles from '../../../styles/Home.module.css'
import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import axios from 'axios'
const AddAuthor = () => {
    const router = useRouter();
    const { Blog } = router.query;
    const [user, setUser] = useState({title: '', blog_details: '', details: ''});
    const handaleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    useEffect( () => {
        if (Blog === 'Add_Blog' ) {
            setUser({title: '', blog_details: '', details: ''})
        } else {
            axios.get(`http://localhost:1234/${Blog}`).then(r => setUser(r.data[0]));
        }
    }, [Blog !== 'Add_Blog']);

    const handaleSubmit = async () => {
        if (Blog === 'Add_Blog'){
            await axios.post('http://localhost:1234/', user);
        } else {
            console.log({user})
            await axios.put(`http://localhost:1234/${Blog}`, user);
        }
        router.push('/')
    };
    console.log({user})
    return(
        <form className={styles.form}>
            <Card className={styles.Crad}>
                <CardContent>
                    <h2 className={styles.hadname}> {Blog === 'Add_Blog' ? "Add Blog" : 'Edit Blog'}  </h2>
                    <TextField
                        variant="standard"
                        fullWidth
                        label="Title *"
                        name='title'
                        className='blog'
                        value={user.title}
                        onChange={handaleChange}
                    />
                    <TextField
                        variant="standard"
                        fullWidth
                        multiline
                        rows={2}
                        rowsMax={3}
                        label='Suggestion'
                        id="text"
                        className={styles.blog}
                        name="blog_details"
                        value={user.blog_details}
                        onChange={handaleChange}
                    />
                    <TextField
                        variant="standard"
                        fullWidth
                        multiline
                        rows={2}
                        rowsMax={3}
                        label='Details'
                        id="text"
                        className={styles.blog}
                        name="details"
                        value={user.details}
                        onChange={handaleChange}
                    />
                    <Button
                        onClick={handaleSubmit}
                        className={styles.LoginButton}
                        color="primary"
                        type='button'
                        variant='outlined'
                    >
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </form>
    )
}
export default AddAuthor;