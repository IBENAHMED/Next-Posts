import React from 'react'
import styles from './page.module.css';
import PostesItem from '../components/PostesItem/PostesItem';

const pagePostes = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 120
        }
    });

    const data = await response.json();

    let postes = data.map((e) => {
        return <PostesItem
            id={e.id}
            title={e.title}
            body={e.body}
        />
    });
    return (
        <div className={styles.container}>
            <div className={styles.postes}>
                {postes}
            </div>
        </div>
    )
}

export default pagePostes
