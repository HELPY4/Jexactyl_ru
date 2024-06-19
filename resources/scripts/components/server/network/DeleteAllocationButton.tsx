import tw from 'twin.macro';
import * as Icon from 'react-feather';
import React, { useState } from 'react';
import { ServerContext } from '@/state/server';
import { useFlashKey } from '@/plugins/useFlash';
import { Dialog } from '@/components/elements/dialog';
import { Button } from '@/components/elements/button/index';
import getServerAllocations from '@/api/swr/getServerAllocations';
import deleteServerAllocation from '@/api/server/network/deleteServerAllocation';

interface Props {
    allocation: number;
}

const DeleteAllocationButton = ({ allocation }: Props) => {
    const [confirm, setConfirm] = useState(false);

    const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);

    const { mutate } = getServerAllocations();
    const { clearFlashes, clearAndAddHttpError } = useFlashKey('server:network');

    const deleteAllocation = () => {
        clearFlashes();

        mutate((data) => data?.filter((a) => a.id !== allocation), false);
        setServerFromState((s) => ({ ...s, allocations: s.allocations.filter((a) => a.id !== allocation) }));

        deleteServerAllocation(uuid, allocation).catch((error) => {
            clearAndAddHttpError(error);
            mutate();
        });
    };

    return (
        <>
            <Dialog.Confirm
                open={confirm}
                onClose={() => setConfirm(false)}
                title={'Отключить порт'}
                confirm={'Отключить'}
                onConfirmed={deleteAllocation}
            >
                Этот порт будет недоступен для сервера/бота и его можно будет восстановить через тех. поддержку или создать новый порт.
            </Dialog.Confirm>
            <Button.Danger
                variant={Button.Variants.Secondary}
                size={Button.Sizes.Small}
                shape={Button.Shapes.IconSquare}
                type={'button'}
                onClick={() => setConfirm(true)}
            >
                <Icon.Trash css={tw`w-3 h-auto`} />
            </Button.Danger>
        </>
    );
};

export default DeleteAllocationButton;
