import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import MobileNavigation from '@/components/elements/MobileNavigation';
import TransitionRouter from '@/TransitionRouter';
import AnnouncementsContainer from '@/components/dashboard/announcements/AnnouncementsContainer';

export default ({ location }: RouteComponentProps) => (
    <>
        <MobileNavigation/>
        <TransitionRouter>
            <Switch location={location}>
                <Route path={'/announcements'} component={AnnouncementsContainer} exact/>
                //<Route path={'*'} component={NotFound}/> Надо взять из IndexRouter.tsx
            </Switch>
        </TransitionRouter>
    </>
);
