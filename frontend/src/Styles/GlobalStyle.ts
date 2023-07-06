import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
	}

	html {
		font-size: 16px;

		body, #root {
			min-height: 100vh;
			color: #F2F2F2;
		}

		body {
			font-family: 'Montserrat', 'Roboto', 'Segoe UI','Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			'Josefin Sans', sans-serif, -apple-system;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		a {
			text-decoration: none;
		}

		li {
			list-style: none;
		}

		button {
			cursor: pointer;
			border: none;
		}

		input, textarea {
			font-family: 'Montserrat', 'Roboto', 'Segoe UI','Oxygen';
		}

		code {
			font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
				monospace;
		}
	}
`;

export { GlobalStyle };
