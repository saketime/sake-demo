import React from 'react';

import { Avatar } from 'antd';

const AvatarCpn = (props) => {
	const { src, fullName, style, className, size, vip, ...attr } = props;

	if (vip) {
		return (
			<div
				style={{
					...style,
					border: '2px solid #FF9900',
					borderRadius: '50%',
					position: 'relative',
					lineHeight: 'normal',
					display: 'inline-block',
				}}
			>
				<Avatar
					{...attr}
					size={size}
					className={className}
					src={src}
					style={{
						border: '1px solid rgba(228, 228, 228, 0.6)',
					}}
				>
					{/* {!src ? <div style={{ fontSize: size / 3, lineHeight: size + 'px' }}>{fullName.slice(0, 2)}</div> : ''} */}
				</Avatar>
			</div>
		);
	}

	return (
		<Avatar
			{...attr}
			size={size}
			className={className}
			src={src}
			style={{
				border: '1px solid rgba(228, 228, 228, 0.6)',
				...style,
			}}
		>
			{/* {!src ? <div style={{ fontSize: size / 3, lineHeight: size + 'px' }}>{fullName.slice(0, 2)}</div> : ''} */}
		</Avatar>
	);
};

export default AvatarCpn;