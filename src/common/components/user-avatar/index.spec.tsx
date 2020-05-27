import React from 'react';

import UserAvatar from './index';
import TestRenderer from 'react-test-renderer';

describe('UserAvatar', () => {
    it('(1) Should render small size', () => {
        const props = {username: 'good-karma', size: 'small'};
        const renderer = TestRenderer.create(
            <UserAvatar {...props}/>
        );
        expect(renderer.toJSON()).toMatchSnapshot();
    });


    it('(2) Should render normal size', () => {
        const props = {username: 'good-karma', size: 'normal'};
        const renderer = TestRenderer.create(
            <UserAvatar {...props}/>
        );
        expect(renderer.toJSON()).toMatchSnapshot();
    });

    it('(3) Should render medium size', () => {
        const props = {username: 'good-karma', size: 'medium'};
        const renderer = TestRenderer.create(
            <UserAvatar {...props}/>
        );
        expect(renderer.toJSON()).toMatchSnapshot();
    });

    it('(4) Should render large size', () => {
        const props = {username: 'good-karma', size: 'large'};
        const renderer = TestRenderer.create(
            <UserAvatar {...props}/>
        );
        expect(renderer.toJSON()).toMatchSnapshot();
    });

    it('(5) Should render xlarge size', () => {
        const props = {username: 'good-karma', size: 'xLarge'};
        const renderer = TestRenderer.create(
            <UserAvatar {...props}/>
        );
        expect(renderer.toJSON()).toMatchSnapshot();
    });
});