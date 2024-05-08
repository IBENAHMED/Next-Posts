import React from 'react'
import PostesItem from '../PostesItem/PostesItem'

const IdposteItem = async (props) => {

    await new Promise((res) => {
        setTimeout(() => [
            res()
        ], 2500)
    })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
        next: {
            revalidate: 120
        }
    })
    const data = await response.json();

    return (
        <>
            <PostesItem
                title={data.title}
                body={data.body}
            />
        </>
    )
}

export default IdposteItem
