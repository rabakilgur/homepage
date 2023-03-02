import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

type ImageProps = {
	src: string;
	alt: string;
};

type ImagePropsGetter = () => ImageProps & {
	onError: h.JSX.GenericEventHandler<HTMLImageElement>;
};

const useImage = ({
	src: srcFromProps,
	alt
}: ImageProps): { getImageProps: ImagePropsGetter } => {
	const [src, setSrc] = useState(srcFromProps);

	const onError: h.JSX.GenericEventHandler<HTMLImageElement> = () => {
		setSrc("fallback.jpg");
	};

	useEffect(() => {
		setSrc(srcFromProps);
	}, [srcFromProps]);

	const getImageProps = () => {
		return { src, alt, onError };
	};

	return { getImageProps };
};

export default useImage;
