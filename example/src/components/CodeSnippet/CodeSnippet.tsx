import {memo} from 'react';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import './CodeSnippet.scss';
import './prism-theme.css';
interface IProps {
	code: string;
	language?: Language;
}

const CodeSnippet = ({code, language = 'jsx'}: IProps) => {
	return (
		<div className='code-container'>
			<Highlight {...defaultProps} code={code} language={language} theme={undefined}>
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
			</Highlight>
		</div>
	);
};

const MemoizedCodeSnippet = memo(CodeSnippet);
export {MemoizedCodeSnippet as CodeSnippet};
