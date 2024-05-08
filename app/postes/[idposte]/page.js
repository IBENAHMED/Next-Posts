import React, { Suspense } from 'react'
import PostesItem from '../../components/PostesItem/PostesItem';
import IdposteItem from '@/app/components/IdposteItem/IdposteItem';

const poste = async (props) => {

    const loding = (<p>loading...</p>)
    return (
        <>
            <h3>My Poste</h3>
            <Suspense fallback={loding}>
                <IdposteItem id={props.params.idposte} />
            </Suspense>
        </>
    )
}

export default poste
