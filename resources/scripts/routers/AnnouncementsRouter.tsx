import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import MobileNavigation from '@/components/elements/MobileNavigation';
import TransitionRouter from '@/TransitionRouter';
import AnnouncementsContainer from '@/components/dashboard/announcements/AnnouncementsContainer';
import { NotFound } from '@/components/elements/ScreenBlock';

export default ({ location }: RouteComponentProps) => (
    <>
        <MobileNavigation/>
        <TransitionRouter>
            <Switch location={location}>
                <Route path={'/announcements'} component={AnnouncementsContainer} exact/>
                <Route path={'*'} component={NotFound} />
            </Switch>
        </TransitionRouter>
    </>
);
