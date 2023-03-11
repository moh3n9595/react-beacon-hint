import {memo, useEffect, useRef} from 'react';
import CodeHighlight, {defaultProps, Language} from 'prism-react-renderer';
import styles from './index.module.scss';
import {OverlayScrollbars} from 'overlayscrollbars';

interface IProps {
	code: string;
	language?: Language;
}

const Highlight = ({code, language = 'jsx'}: IProps) => {
	const ref = useRef<HTMLPreElement>(null);

	useEffect(() => {
		if (ref.current) {
			OverlayScrollbars(ref.current, {
				scrollbars: {
					autoHide: 'move',
					autoHideDelay: 500,
				},
			});
		}
	}, []);
	return (
		<div className={styles.highlight}>
			<CodeHighlight {...defaultProps} code={code} language={language} theme={undefined}>
				{({className, tokens, getLineProps, getTokenProps}) => (
					<pre
						data-overlayscrollbars-initialize
						ref={ref}
						className={`w-full h-full p-4 box-border rounded-lg ${className}`}
					>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({line, key: i})}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({token, key})} />
								))}
							</div>
						))}
					</pre>
				)}
			</CodeHighlight>
		</div>
	);
};

const MemoizedHighlight = memo(Highlight);
export {MemoizedHighlight as Highlight};
