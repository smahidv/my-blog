import Image from "next/image";
import React from "react";
import footerBottomMask from "@/public/footerBottomMask.png";
import footerTopMask from "@/public/footerTopMask.png";
import Group from "@/public/Group.png";
import FooterNav from "./FooterNav";

 
export const Footer = async () => {	
	const icons = ["FB", "YT", "IG", "LN"];
	return (
		<footer>
			<div className="bg-purple relative px-6 pt-[61px] pb-[53px] lg:pt-[88.32px] lg:pb-[94.78px] desktop:py-[123px] ">
				<Image
					src={footerTopMask}
					alt="footerTopMask"
					className="absolute -top-8 -left-8 w-[180px] lg:w-[300px] desktop:w-[410px] lg:left-0 lg:-top-16"
				/>
				<Image
					src={footerBottomMask}
					alt="footerBottomMask"
					className="absolute -bottom-6 right-0 w-[260px] lg:w-[350px] desktop:w-[450px]"
				/>
				<div className="max-w-[327px] lg:max-w-[551.45px] desktop:max-w-[768px] mx-auto font-raleway text-center">
					<div className="text-white font-bold  text-2xl lg:text-[37.34px] lg:leading-[34.5px] desktop:text-[52px] desktop:leading-[48px]">
						Get our stories delivered From us to your inbox weekly.
					</div>
					<div className="flex justify-center gap-[5.3px] desktop:gap-2 my-[35px] lg:mb-[17.23px] desktop:mt-12 desktop:mb-6 ">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="w-full lg:w-[229.77px] desktop:w-[320px]  text-[#5A7184] rounded-[5.3px] py-3 px-[15.22px] text-[10.59px] lg:text-[11.4px] desktop:text-base"
						/>
						<button
							type="button"
							className="whitespace-nowrap rounded-[5.3px] px-[21.18px] lg:px-[26.28px]  desktop:px-[36px] text-white font-bold text-[11.91px] lg:text-[12.92px] border-white border desktop:text-lg"
						>
							Get started
						</button>
					</div>
					<div className="text-[11.49px] text-[#bbbbbb] desktop:text-base max-w-[285px] lg:max-w-[398.51px] desktop:max-w-[555px] mx-auto  ">
						Get a response tomorrow if you submit by 9pm today. If we received
						after 9pm will get a reponse the following day.
					</div>
				</div>
			</div>
			<div className="max-w-[1234px]  mx-auto lg:px-[34px] desktop:px-0 px-6 pt-[36.62px]  pb-[28.72px] desktop:pt-[51px] desktop:pb-10">
				<div className="flex items-center gap-[11px] desktop:gap-[15px] justify-center">
					<Image src={Group} className="w-[32px] desktop:w-[44px]" alt="logo" />
					<div className="font-raleway font-extrabold text-2xl desktop:text-[33.7px]">
						Zariim
					</div>
				</div>
				<FooterNav/>
				<div className="flex justify-center gap-3">
					{icons.map((item, index) => (
						<div
							key={index}
							className="bg-purple text-white text-xs font-bold font-raleway rounded-full w-[30px] h-[30px] flex items-center justify-center"
						>
							{item}
						</div>
					))}
				</div>
			</div>
      <div className="bg-purple h-[0.7px] w-full lg:w-[884.61px] xl:w-[1100px] desktop:max-w-[1232px]  mx-auto"></div>
      <div className="text-center pt-[28.72px] pb-[61px] lg:pb-10 desktop:pt-10 desktop:pb-[61px] font-raleway  text-[11.49px] desktop:text-base">Copyright SmahiDev Inc © 2023. All Right Reserved</div>
		</footer>
	);
};
