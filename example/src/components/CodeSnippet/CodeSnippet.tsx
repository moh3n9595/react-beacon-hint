import {memo, useEffect} from 'react';
import Prism from 'prismjs';
import './CodeSnippet.scss';
import './prism-theme.css';
interface IProps {
	code: string;
	language: string;
}

const CodeSnippet = ({code, language}: IProps) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<div className='code'>
			<pre>
				<code className={`language-${language}`}>{code}</code>
			</pre>
		</div>
	);
};

const MemoizedCodeSnippet = memo(CodeSnippet);
export {MemoizedCodeSnippet as CodeSnippet};
