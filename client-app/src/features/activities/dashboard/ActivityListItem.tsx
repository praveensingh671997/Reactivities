import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface Props {
    activity: Activity
}
const ActivityListItem = ({ activity }: Props) => {
    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;

    // const [target, setTarget] = useState('');

    // function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    //     setTarget(e.currentTarget.name);
    //     deleteActivity(id);
    // }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted By Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> {activity.date}
                    <Icon name="marker" /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button as={Link} to={`/activities/${activity.id}`} color='teal' floated="right" content="View" />
            </Segment>
        </Segment.Group>
        // <Item key={activity.id}>
        //     <Item.Content>
        //         <Item.Header as='a'>{activity.title}</Item.Header>
        //         <Item.Meta>{activity.date}</Item.Meta>
        //         <Item.Description>
        //             <div>{activity.description}</div>
        //             <div>{activity.city}, {activity.venue}</div>
        //         </Item.Description>
        //         <Item.Extra>
        //             <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue' />

        //             <Button
        //                 name={activity.id}
        //                 loading={loading && target === activity.id}
        //                 onClick={(e) => handleActivityDelete(e, activity.id)}
        //                 animated floated='right' color='red'>
        //                 <Button.Content visible>Delete</Button.Content>
        //                 <Button.Content hidden>
        //                     <Icon name='trash' />
        //                 </Button.Content>
        //             </Button>

        //             <Label basic content={activity.category} />
        //         </Item.Extra>
        //     </Item.Content>
        // </Item>
    )
}

export default ActivityListItem;