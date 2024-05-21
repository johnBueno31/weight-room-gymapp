function Hero() {
	return (
		<div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
			<div className="flex flex-col">
				<p>It's time to get</p>
				<h1 className="uppercase font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
					Swole<span className="text-blue-400">normous</span>
				</h1>
			</div>
			<p className="text-sm md:text-base font-light">
				Let us get shredded shall we? I hereby acknowledge that I may become{" "}
				<span className="text-blue-400 font-medium">unbelieveably hyuuge</span>{" "}
				and accept all risks of becoming the local{" "}
				<span className="text-blue-400 font-medium">mass monstrosity</span>,
				afflicted with severe body dysmorphia and unable to fit through doors.
			</p>
			<button className="px-8 px-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
				<p>Accept & Begin</p>
			</button>
		</div>
	);
}

export default Hero;
