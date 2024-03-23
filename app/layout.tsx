import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./tailwind.globals.css";

const font = Montserrat({
	subsets: ["latin"],
	weight: ["300","400","500","600","700"]
});

export const metadata: Metadata = {
	title: "Wetoon",
	description: "Wetoon เว็บอ่านการ์ตูนออนไลน์ การ์ตูนแปลไทย ลงผลงานแปล การ์ตูนล่าสุด มังงะมาใหม่ มังงะติดเทรนสุดมันส์!!",
};

export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={ font.className }>{ children }</body>
		</html>
	);
}
