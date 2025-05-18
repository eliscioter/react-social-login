import BasicAuth from "./components/basic-auth";
import SocialLogins from "./components/social-login";

export default function Home() {
	return (
		<>
			<div className="w-full  text-center">
				<h1 className="text-6xl">Hello World</h1>
				<h2 className="text-8xl">React Social Login</h2>
			</div>
			<BasicAuth />
			<SocialLogins />
		</>
	);
}
