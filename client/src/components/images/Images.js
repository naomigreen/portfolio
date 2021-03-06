import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Image = ({ src, width, radius, maxWidth, opacity, padding }) => (
	<Img src={src} width={width} maxWidth={maxWidth} radius={radius} opacity={opacity} padding={padding} alt='' />
);

export const LinkImage = ({ src, width, maxWidth, link }) => (
	<a href={link}>
		<Link src={src} width={width} maxWidth={maxWidth} alt='' />
	</a>
);

export const LinkContact = ({ src, link }) => (
	<a href={link}>
		<ContactLink src={src} link={link} alt='' />
	</a>
);

// Style component overrides aren't working so I'm passing the styles in via props

const Img = styled.img`
	transition: all 0.9s ease;
	width: ${(props) => props.width};
	max-width: ${(props) => props.maxWidth};
	border-radius: ${(props) => props.radius};
	opacity: ${(props) => props.opacity};
	padding: ${(props) => props.padding};
	display: block;
	margin: 0 auto;
`;

const Link = styled.img`
	width: ${(props) => props.width};
	max-width: ${(props) => props.maxWidth};
	display: block;
	margin: 20px auto;
`;

const ContactLink = styled.img`
	width: 23px;
	max-width: 33%;
	display: inline;
	margin: 0px 7px;
	background: #fff;
	border-radius: 100%;
	padding: 6px;
`;

Image.propTypes = {
	src: PropTypes.string,
	width: PropTypes.string
};
