import { Rubik_Glitch } from "next/font/google";
import Link from "next/link";

const font = Rubik_Glitch({
	subsets: ["latin"],
	weight: ["400"]
});

export default function Home() {
	return (
		<>
			<header className="select-none antialiased text-white bg-header bg-cover bg-no-repeat bg-center w-screen h-screen">
				<div className="w-[90%] max-w-[1140px] h-full mx-auto">
					<nav className="flex justify-between items-center h-[25vh]">
						<h1 className={ font.className + " text-bold text-5xl" }>Wetoon</h1>
						<Link
							className="text-lg transition-all duration-500 text-white hover:text-black bg-transparent hover:bg-white border-2 border-white hover:border-black hover:shadow px-6 py-1 rounded-full font-medium"
							href="/auth/login">
							{"Signin"}
						</Link>
					</nav>
					<section className="flex h-[75vh] items-center">
						<div>
							<h1 className="text-5xl font-bold mb-4">Hello, Wetoon!</h1>
							<p className="w-full md:w-1/2 mb-8">Your ultimate destination for Manga and Manhwa translations. Join our community of passionate members and enjoy free, unlimited uploads. Dive into a world of creativity and storytelling with Wetoon.</p>
							<Link
								className="text-lg transition-all duration-500 bg-[#fa2845] hover:bg-transparent border-2 border-transparent hover:border-red-600 px-6 py-2 sm:py-3 rounded-full font-medium"
								href="/auth/register">
								{"Join now"}
							</Link>
						</div>
					</section>
				</div>
			</header>
		</>
	);
}
