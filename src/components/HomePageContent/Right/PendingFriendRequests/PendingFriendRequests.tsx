import React from 'react';
import PendingFriendRequestItem from './PendingFriendRequestItem';
import { UserType } from '../../../../libs/types';
import ShowCPBasedOnData from '../../../Reusable/ShowCPBasedOnData';

type FriendRequestsProps = {
	friend_requests: UserType[];
};

function PendingFriendRequests({
	friend_requests
}: FriendRequestsProps): React.ReactElement {
	function createPendingFriendRequestItems(): React.ReactNode {
		return friend_requests.map((friend_request) => {
			return <PendingFriendRequestItem friend_request={friend_request} />;
		});
	}

	function showPendingFriendRequestsContent(): React.ReactNode {
		return (
			<div className='friendRequestsContainer mt-6'>
				<p className='text-darkGrey pl-2 font-medium text-lg'>
					Pending Friend Requests
				</p>

				<hr className='bg-darkGrey ml-1' />

				{ShowCPBasedOnData(
					<div className='text-center p-4	'>
						<p>No pending friend requests</p>
					</div>,
					<div className='flex flex-col gap-x-4 gap-y-6 mt-4 w-10/12 m-auto p-2'>
						{createPendingFriendRequestItems()}
					</div>,
					friend_requests
				)}
			</div>
		);
	}

	return <>{showPendingFriendRequestsContent()}</>;
}

export default PendingFriendRequests;