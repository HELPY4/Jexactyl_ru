import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import NotFound from '@/components/screens/NotFound';
import TransitionRouter from '@/TransitionRouter';
import AnnouncementsContainer from '@/components/dashboard/announcements/AnnouncementsContainer';

export default ({ location }: RouteComponentProps) => (
    <>
        <NavigationBar/>
        <TransitionRouter>
            <Switch location={location}>
                <Route path={'/announcements'} component={AnnouncementsContainer} exact/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </TransitionRouter>
    </>
);
