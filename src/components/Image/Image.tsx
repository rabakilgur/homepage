import useImage from "src/lib/hooks/useImage";

const Image = ({
	src,
	alt = ""
}: {
	src: string;
	alt?: string;
}) => {
	const { getImageProps } = useImage({ src: src, alt: alt });

	return <img {...getImageProps()} />;
};

export default Image;
