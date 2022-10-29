import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
    // agent.Activities.list().then(response => {
    //   debugger
    //   let activities: Activity[] = [];
    //   response.forEach(activity => {
    //     activity.date = activity.date.split('T')[0];
    //     activities.push(activity);
    //   })
    //   setActivities(activities);
    //   setLoading(false);
    // });

    // axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
    //   setActivities(response.data);
    // });
  }, [activityStore]);

  // function handleSelectActivity(id: string) {
  //   setSelectedActivity(activities.find(x => x.id === id));
  // }

  // function handleCancelSelectActivity() {
  //   setSelectedActivity(undefined);
  // }

  // function handleFormOpen(id?: string) {
  //   id ? handleSelectActivity(id) : handleCancelSelectActivity();
  //   setEditMode(true);
  // }

  // function handleFormClose() {
  //   setEditMode(false);
  // }

  // function handleCreateOrEditActivity(activity: Activity) {
  //   setSubmitting(true); // to display loader on submit button
  //   if (activity.id) {
  //     agent.Activities.update(activity).then(() => {
  //       setActivities([...activities.filter(x => x.id !== activity.id), activity]);
  //       setSelectedActivity(activity); // to display details in activity details
  //       setEditMode(false); // to hide activity form
  //       setSubmitting(false);
  //     });
  //   } else {
  //     activity.id = uuid();// setting unique id
  //     agent.Activities.create(activity).then(() => {
  //       setActivities([...activities, activity]);
  //       setSelectedActivity(activity); // to display details in activity details
  //       setEditMode(false); // to hide activity form
  //       setSubmitting(false);
  //     });
  //   }
  // }

  // function handleDeleteActivity(id: string) {
  //   setSubmitting(true);
  //   agent.Activities.delete(id).then(() => {
  //     setActivities([...activities.filter(x => x.id !== id)]);
  //     setSubmitting(false);
  //   });
  // }

  if (activityStore.loadingInitial) return <LoadingComponent inverted content='Loading...' />

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
