import React, { useEffect, useState } from 'react';
import { Container, Button, Card, Form, Row } from 'react-bootstrap'


const AddPost = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [createPost, setCreatePost] = useState(false)


    useEffect(() => {
        if (createPost == true) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: { title },
                    body: { description },
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
        setCreatePost(false)
    }, [createPost]);



    return (
        <Container
            className="d-flex justify-content-center align-items-center">
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Создание поста</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название поста"
                    />
                    <textarea class="form-control"
                        className="mt-3"
                        value={description}
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="  Введите комментарий к посту"
                        onChange={e => setDescription(e.target.value)}>
                    </textarea>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button
                            onClick={() => { setCreatePost(true) }}
                            // className="align-self-end" 
                            variant="outline-success">
                            Добавить пост
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default AddPost;