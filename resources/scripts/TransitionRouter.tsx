import React from 'react';
import tw from 'twin.macro';
import { Route } from 'react-router';
import styled from 'styled-components/macro';
import Fade from '@/components/elements/Fade';
import { SwitchTransition } from 'react-transition-group';

const StyledSwitchTransition = styled(SwitchTransition)`
    ${tw`relative`};

    & section {
        ${tw`absolute w-full top-0 left-0`};
    }
`;

const TransitionRouter: React.FC = ({ children }) => {
    return (
        <Route
            render={({ location }) => (
                <StyledSwitchTransition>
                    {/*По умолчанию 150. 200 - хороший баланс между 150 и 250*/}
                    <Fade timeout={200} key={location.pathname + location.search} in appear unmountOnExit>
                        <section>{children}</section>
                    </Fade>
                </StyledSwitchTransition>
            )}
        />
    );
};

export default TransitionRouter;
