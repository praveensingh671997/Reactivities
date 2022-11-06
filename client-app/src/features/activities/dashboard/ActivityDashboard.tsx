import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';

//{activities[0] && <ActivityDetails activity={activities[0]} />}
// It means that if activities[0] is not null or undefined then it will execute right side content
//It works because in JavaScript, (true && expression) always evaluates to expression,
// and (false && expression) always evaluates to false. 

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry]);

    if (activityStore.loadingInitial) return <LoadingComponent inverted content='Loading...' />

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                <h2>Activity filter</h2>
                {/* {selectedActivity && !editMode &&
                    <ActivityDetails />}

                {editMode &&
                    <ActivityForm />} */}
            </Grid.Column>
        </Grid>
    )
})