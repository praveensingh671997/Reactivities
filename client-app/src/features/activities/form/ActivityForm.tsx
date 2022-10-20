import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}
// { activity: selectedActivity} here selectedActivity is the new name of activity.
export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        date: '',
        city: '',
        venue: '',
        description: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        //{...activity,[name]:value} => in this it will update the value of [key]
        // in activity object, if that key exists in object
        // (ex ["id"]:"value" => activity{"id" :"value"}) 
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange}></Form.Input>
                <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleInputChange}></Form.TextArea>
                <Form.Input placeholder="Category" value={activity.category} name="category" onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="Date" value={activity.date} name="date" onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange}></Form.Input>
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}