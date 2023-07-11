//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Landing from "./layout/layout";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import Testimonials from "./pages/testimonials/testimonials";
import News from "./pages/news/news";
import NotFound from "./error/404";
import Products from "./pages/products/products";
import Quotation from "./pages/quotation/quotation";
import Careers from "./pages/careers/careers";
import Research from "./pages/research/research";
import TermsOfService from "./pages/terms/terms";
import PrivacyPolicy from "./pages/privacy/privacy";
import FAQ from "./pages/faq/faq";
import Domain from "./pages/domain/domain";
import WIP from "./pages/wip/wip";
import Legal from "./pages/legal/legal";
import Blogs from "./pages/blogs/blogs";
import SingleService from "./pages/singleService/singleService";
import SingleDomain from "./pages/singleDomain/singleDomain";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/landing",
			element: <Landing/>,
			children: [
				{
					path: "/landing/home",
					element: <Home/>
				},
				{
					path: "/landing/about",
					element: <About/>
				},
				{
					path: "/landing/services",
					element: <Services/>
				},
				{
					path: "/landing/service/single",
					element: <SingleService/>
				},
				{
					path: "/landing/domain",
					element: <Domain/>
				},
				{
					path: "/landing/domain/single",
					element: <SingleDomain/>
				},
				{
					path: "/landing/products",
					element: <Products/>
				},
				{
					path: "/landing/wip",
					element: <WIP/>
				},
				{
					path: "/landing/careers",
					element: <Careers/>
				},
				{
					path: "/landing/research",
					element: <Research/>
				},
				{
					path: "/landing/testimonials",
					element: <Testimonials/>
				},
				{
					path: "/landing/news",
					element: <News/>
				},
				{
					path: "/landing/blogs",
					element: <Blogs/>
				},
				{
					path: "/landing/faq",
					element: <FAQ/>
				},
				{
					path: "/landing/contact",
					element: <Contact/>
				},
				{
					path: "/landing/quotation",
					element: <Quotation/>
				},
				{
					path: "/landing/terms",
					element: <TermsOfService/>
				},
				{
					path: "/landing/privacy",
					element: <PrivacyPolicy/>
				},
				{
					path: "/landing/legal",
					element: <Legal/>
				},
			]
		},
		{
			path: "/404",
			element: <NotFound/>
		},
		{
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router