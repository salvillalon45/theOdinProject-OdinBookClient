import useSWR from 'swr';
import {
	UseUserByIDHookReturnType,
	ErrorType,
	PostType,
	UsePostsHookReturnType,
	UseUsersHookReturnType
} from './types';

async function fetcher(url: string, authorization: string) {
	const response = await fetch(url, {
		headers: { Authorization: authorization }
	});

	const { status, statusText } = response;
	if (status === 401 && statusText === 'Unauthorized') {
		const error: ErrorType = {
			context: 'NOT AUTHORIZED',
			message: 'You need to log in to proceed!',
			errors: ['You need to log in to proceed!']
		};

		throw error;
	}

	return await response.json();
}

function useUserByID(
	userid: string,
	authorization: string
): UseUserByIDHookReturnType {
	const { data, error: errorsData } = useSWR(
		[`${process.env.GATSBY_ODIN_BOOK}/users/${userid}`, authorization],
		fetcher
	);
	// console.group('Inside userUser()');
	// console.log('What is data in Use USER');
	// console.log({ data });
	// console.log('What is errorsData in USE USER');
	// console.log({ errorsData });

	console.groupEnd();
	return {
		userData: data,
		isLoading: !errorsData && !data,
		errorsData
	};
}

function useUsers(authorization: string): UseUsersHookReturnType {
	const { data, error: errorsData } = useSWR(
		[`${process.env.GATSBY_ODIN_BOOK}/users`, authorization],
		fetcher
	);

	return {
		usersData: data,
		isLoading: !errorsData && !data,
		errorsData
	};
}

function usePosts(
	userid: string,
	authorization: string
): UsePostsHookReturnType {
	const { data, error: errorsData } = useSWR(
		[`${process.env.GATSBY_ODIN_BOOK}/posts/${userid}`, authorization],
		fetcher
	);

	return {
		allPosts: data,
		isLoading: !errorsData && !data,
		errorsData
	};
}

async function executeRESTMethod(
	method: string,
	path: string,
	authorization?: string,
	bodyData?: Object
) {
	const response = await fetch(`${process.env.GATSBY_ODIN_BOOK}/${path}`, {
		method,
		headers: {
			Authorization: authorization ?? '',
			'Content-Type': 'application/json'
		},
		body: bodyData ? JSON.stringify(bodyData) : null
	});

	const { status, statusText } = response;
	if (status === 401 && statusText === 'Unauthorized') {
		return { errors: ['Log in to access OdinBook'] };
	}

	const jsonData = await response.json();
	return jsonData;
}

export { executeRESTMethod, usePosts, useUserByID, useUsers };
