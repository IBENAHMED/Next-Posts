import React from 'react';
import styles from './PostesItem.module.css';
import Link from 'next/link';

const PostesItem = (props) => {
    return (
        <div className={styles.card}>
            <Link href={`postes/${props.id}`}>
                <img src="https://picsum.photos/seed/picsum/500/200" alt="Placeholder" className={styles.cardImage} />
                <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{props.title}</h2>
                    <p className={styles.cardText}>{props.body}</p>
                </div>
            </Link>
        </div>
    )
}

export default PostesItem
