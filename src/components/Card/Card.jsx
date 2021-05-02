import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import './Card.scss'
import { postsAPI } from '../api/api';



const CardForPost = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const [del, setDel] = useState(false)

    useEffect(() => {
        if (del == true) {
            const deletePost = async () => {
                const res = await postsAPI.delete(id);
                setData(res.data);
            };
            deletePost();
        } else {
            const fetchPost = async () => {
                const res = await postsAPI.fetchPost(id);
                setData(res.data);
            };
            fetchPost();
        }

    }, [del]);

    if (del == true) {
        return (
            <Card className="text-center сard ">
                <Card.Body>
                    <Card.Text className="delete">ПОСТ БЫЛ УДАЛЕН</Card.Text>
                    <Button variant="success" onClick={() => { setDel(false) }}>Вернуть пост</Button>
                </Card.Body>
            </Card>
        );
    } else {
        return (
            <Card className="text-center сard ">
                <Card.Header>Post N-{data.id}</Card.Header>
                <Card.Body>
                    <Card.Title className="header mb-4">{data.title}</Card.Title>
                    <Card.Text className="body mb-4">
                        {data.body}
                    </Card.Text>
                    <Button variant="danger" onClick={() => { setDel(true) }}>Удалить пост</Button>
                </Card.Body>
            </Card>
        )
    }
};

export default CardForPost;