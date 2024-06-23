import React, { useEffect, useState } from 'react';
import PageContentBlock from '@/components/elements/PageContentBlock';
import tw from 'twin.macro';
import FlashMessageRender from '@/components/FlashMessageRender';
import Spinner from '@/components/elements/Spinner';
import getAnnouncements from '@/api/getAnnouncements';
import useFlash from '@/plugins/useFlash';
import useSWR from 'swr';
import TitledGreyBox from '@/components/elements/TitledGreyBox';
// import styled from 'styled-components/macro';

// const Code = styled.code`${tw`font-mono py-1 px-2 bg-neutral-900 rounded text-sm inline-block`}`;

export interface AnnouncementsResponse {
    announcements: any[];
}

export default () => {
    const { clearFlashes, clearAndAddHttpError } = useFlash();
    const { data, error } = useSWR<AnnouncementsResponse>([ '/announcements' ], () => getAnnouncements());

    const [ isVisibleAll, setVisibleAll ] = useState(true);
    const [ visibleOne, setVisibleOne ] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ date, setDate ] = useState('');

    useEffect(() => {
        if (!error) {
            clearFlashes('announcements');
        } else {
            clearAndAddHttpError({ key: 'announcements', error });
        }
    });

    const showAnnouncement = (title: string, body: string, date: string) => {
        setVisibleAll(false);
        setTitle(title);
        setBody(body);
        setDate(date);
        setVisibleOne(true);
    };

    const showAllAccouncement = () => {
        setVisibleOne(false);
        setVisibleAll(true);
    };

    return (
        <PageContentBlock title={'Announcements'} css={tw`flex flex-wrap`}>
            <div css={tw`w-full`}>
                <FlashMessageRender byKey={'announcements'} css={tw`mb-4`} />
            </div>
            {!data ?
                <div css={tw`w-full`}>
                    <Spinner size={'large'} centered />
                </div>
                :
                <>
                    {data.announcements.length < 1 ?
                        <p css={tw`text-center text-sm text-neutral-400 pt-4 pb-4`}>
                            There are no announcements.
                        </p>
                        :
                        (isVisibleAll &&
                            (data.announcements.map((item, key) => (
                                <div css={tw`w-full lg:w-1/2 lg:pl-4 pt-4`} key={key}>
                                    <TitledGreyBox title={item.title}>
                                        <div css={tw`px-1 py-2`}>
                                            <span dangerouslySetInnerHTML={{ __html: item.body.substr(0, 120) + (item.body.length > 120 ? '...' : '') }}></span>
                                            <div css={tw`w-full pt-4`}>
                                                <span css={'float: right;'}>{item.updated_at}</span>
                                                <a css={'color: #206EB0; cursor: pointer;'} onClick={() => showAnnouncement(item.title, item.body, item.updated_at)}>Read More</a>
                                            </div>
                                        </div>
                                    </TitledGreyBox>
                                </div>
                            )))
                        )
                    }

                    {visibleOne &&
                    <div css={tw`w-full lg:pl-4 pt-4`}>
                        <TitledGreyBox title={title}>
                            <div css={tw`px-1 py-2`}>
                                <span dangerouslySetInnerHTML={{ __html: body }}></span>
                                <div css={tw`w-full pt-4`}>
                                    <span css={'float: right;'}>{date}</span>
                                    <a css={'color: #206EB0; cursor: pointer;'} onClick={showAllAccouncement}>Go Back</a>
                                </div>
                            </div>
                        </TitledGreyBox>
                    </div>
                    }
                </>
            }
        </PageContentBlock>
    );
};
