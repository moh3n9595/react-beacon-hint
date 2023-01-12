import React from 'react';
import ReactDOM from 'react-dom/client';
import {Root} from './routes/root';
import './index.scss';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './error-page';
import {Home} from './screens/HomePage/Home.screen';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/docs',
			},
			{
				path: '/examples',
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
