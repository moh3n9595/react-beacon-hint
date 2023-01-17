import {memo} from 'react';
import CodeHighlight, {defaultProps, Language} from 'prism-react-renderer';
import styles from './index.module.scss';

interface IProps {
	code: string;
	language?: Language;
}

const Highlight = ({code, language = 'jsx'}: IProps) => {
	return (
		<div className={styles.highlight}>
			<CodeHighlight {...defaultProps} code={code} language={language} theme={undefined}>
				{({className, tokens, getLineProps, getTokenProps}) => (
					<pre className={`w-full h-full p-4 box-border rounded-lg ${className}`}>
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
