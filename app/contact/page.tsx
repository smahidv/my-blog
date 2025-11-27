
import { contactContent } from "@/constant";
import Image from "next/image";

const ContactUs = () => {
	return (
		<main className="bg-bodyColor pb-[660px]  lg:pb-[471px] ">
			<div className="max-w-[1234px]  mx-auto   px-[44px] pt-[48px]  lg:pt-[84px]   lg:px-[106px]">
				<div className="text-center   font-raleway font-bold text-[24px] lg:leading-[45.7px] leading-[32.8px] lg:text-[40px] desktop:leading-[45px] my-[27px]  lg:max-w-[500px] mx-auto">
					Get in Touch
				</div>
				<div className="text-center max-w-[400px] mx-auto font-roboto text-gray666 text-[11.49px] desktop:text-base  mb-[45px] lg:mb-10">
					Contact us to publish your content and show ads to our website and get
					a good reach.
				</div>
				<div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-4 items-center justify-center mb-[73px] lg:mb-20">
					{contactContent.map((item, index) => (
						<div
							key={index}
							className="bg-white w-[260px] h-[170px] rounded-xl flex flex-col justify-center items-center space-y-[14px]"
						>
							<div className="bg-purple flex justify-center rounded-full size-[48.88px]">
								<Image
									className="object-contain"
									src={item.vector}
									alt={item.title}
									width={16}
									height={16}
								/>
							</div>
							<div className="text-purple font-raleway font-bold text-sm">
								{item.title}
							</div>
							<div className="text-[#7A7A7A] font-raleway font-medium text-xs">
								{item.description}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="relative">
				{/* <GoogleMapComponent /> */}
				<div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[90%] sm:min-w-[327px] lg:max-w-[536.29px]">
					<form
						action=""
						className="space-y-5 rounded bg-white px-[54px] py-[45px] lg:pb-[117.31px]"
					>
						<div className="lg:flex gap-[14px] space-y-5 lg:space-y-0">
							<div>
								<label
									htmlFor="name"
									className="font-raleway text-[11.17px] text-[#4C4C4C] font-semibold capitalize "
								>
									name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="rounded-sm block mt-[5.14px] border-[#C4C4C4] border-[0.7px] outline-none focus:outline-none "
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="font-raleway text-[11.17px] text-[#4C4C4C] font-semibold capitalize "
								>
									email
								</label>
								<input
									type="text"
									name="email"
									id="email"
									className="rounded-sm block mt-[5.14px] border-[#C4C4C4] border-[0.7px] outline-none focus:outline-none "
								/>
							</div>
						</div>
						<div className="lg:flex gap-[14px] space-y-5 lg:space-y-0">
							<div>
								<label
									htmlFor="phone"
									className="font-raleway text-[11.17px] text-[#4C4C4C] font-semibold capitalize "
								>
									phone
								</label>
								<input
									type="text"
									name="phone"
									id="phone"
									className="rounded-sm block mt-[5.14px] border-[#C4C4C4] border-[0.7px] outline-none focus:outline-none "
								/>
							</div>
							<div>
								<label
									htmlFor="subject"
									className="font-raleway text-[11.17px] text-[#4C4C4C] font-semibold capitalize "
								>
									subject
								</label>
								<input
									type="text"
									name="subject"
									id="subject"
									className="rounded-sm block mt-[5.14px] border-[#C4C4C4] border-[0.7px] outline-none focus:outline-none "
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="message"
								className="font-raleway text-[11.17px] text-[#4C4C4C] font-semibold capitalize "
							>
								message
							</label>
							<textarea
								className="rounded-sm w-full block mt-[5.14px] border-[#C4C4C4] border-[0.7px] outline-none focus:outline-none "
								name="message"
								id="message"
								rows={5}
							></textarea>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default ContactUs;
