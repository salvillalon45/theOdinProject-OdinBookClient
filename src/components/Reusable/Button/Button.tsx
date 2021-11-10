import React from 'react';
import { navigate } from 'gatsby';

type ButtonProps = {
	buttonMessage: string;
	color?: string;
	width?: string;
};

function Button(props: ButtonProps): React.ReactElement {
	const { buttonMessage, width } = props;
	const color = props.color ?? 'bg-linearBlue';

	// function buttonAction() {
	// 	if (
	// 		buttonMessage === 'Go Back' ||
	// 		buttonMessage === 'Go Back To Dashboard'
	// 	) {
	// 		return navigate('/dashboard');
	// 	} else if (buttonMessage === 'Update Post') {
	// 		return navigate(props.path + '?update');
	// 	} else if (buttonMessage === 'Create a New Post') {
	// 		return navigate(props.path + '?create');
	// 	} else if (buttonMessage === 'Submit') {
	// 		return props.handleSubmit();
	// 	} else if (buttonMessage === 'Go Back To Post') {
	// 		return navigate(props.path);
	// 	} else if (buttonMessage === 'Log In') {
	// 		return navigate(props.path);
	// 	} else if (buttonMessage === 'Delete Post') {
	// 		return props.handlePostDelete();
	// 	} else if (buttonMessage === 'Delete Comment') {
	// 		return props.handleCommentDelete();
	// 	}
	// }

	return (
		<button
			type='button'
			className={`font-roboto font-bold p-2 ${width} rounded-lg text-white ${color} text-center mt-6 m-auto`}
			// onClick={() => buttonAction()}
		>
			{buttonMessage}
		</button>
	);
}

export default Button;
