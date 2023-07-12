import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import Banner from "./sections/banner";
import LeftRight from "src/components/sections/leftright";
import HomeTestimonial from "./sections/testimonial";
import HomeServices from "./sections/service";
import Subscribe from "src/components/sections/subscribe";
import ContactForm from "src/components/sections/contactform";
import LeftRightContainered from "src/components/sections/leftrightcontainered";

import { leftRightContainerList } from "./info"
import ReusableNewsCards from "src/components/sections/newscards";
import HomeDomain from "./sections/domain";

import BlogList from "src/content/blogs";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687988001/images/tablet_ifczul.jpg";
const subtitle= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lobortis gravida. Duis efficitur velit nibh, vel vulputate neque posuere pharetra.`

const newsTitle = "Insights Unleashed: Unlocking Knowledge and Inspiration";
const newsSubtitle = "Be it through an enlightening email conversation, a constructive phone call, or an immersive visit to our Nairobi location, we make sure our expertise is at your disposal. Each interaction is designed to inspire, engage, and empower you, bringing us closer to our shared vision of technological transformation. Trust 'Integral Support', your essential partner in scripting a successful digital narrative."

const paragraphs = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lobortis gravida. Duis efficitur velit nibh, vel vulputate neque posuere pharetra. Donec vitae semper elit. In in tortor scelerisque orci dapibus finibus vel interdum est. Mauris porta nunc aliquam posuere malesuada. Morbi eget condimentum metus, non porta magna. Sed id erat in nunc ultrices imperdiet. Aliquam ornare tellus mattis erat efficitur ultricies. Vivamus nisl dui, elementum et ultrices nec, fermentum non mauris. Curabitur dapibus mollis est ut imperdiet. Pellentesque in viverra erat.`,
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lobortis gravida. Duis efficitur velit nibh, vel vulputate neque posuere pharetra. Donec vitae semper elit. In in tortor scelerisque orci dapibus finibus vel interdum est. Mauris porta nunc aliquam posuere malesuada. Morbi eget condimentum metus, non porta magna. Sed id erat in nunc ultrices imperdiet. Aliquam ornare tellus mattis erat efficitur ultricies. Vivamus nisl dui, elementum et ultrices nec, fermentum non mauris. Curabitur dapibus mollis est ut imperdiet. Pellentesque in viverra erat.`,
]


const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const sortedBlogList = BlogList.slice(0,4)

const Home = () => {
	return (
		<Page title="Homepage">
			<StyledWrapper>
				<Banner/>
				<LeftRightContainered
					title="Continue to Grow Business."
					subtitle={subtitle}
					chipText="Business Type"
					list={leftRightContainerList}
					imgPosition="right"
					image={image}
					imageHeight="500"
					chipWidth="200px"
				/>
				<LeftRight
					title="Continue to Grow Business."
					subtitle={subtitle}
					chipText="Why choose us"
					chipColor="white"
					list={leftRightContainerList}
					imgPosition="left"
					image={image}
					ImageminHeight="50vh"
					paragraphs={paragraphs}
				/>
				<HomeServices/>
				<LeftRightContainered
					title="Continue to Grow Business."
					subtitle={subtitle}
					chipText="Business Type"
					chipColor="white"
					list={leftRightContainerList}
					imgPosition="right"
					image={image}
					imageHeight="500"
					chipWidth="200px"
					backgroundColor
				/>
				<HomeDomain/>
				<HomeTestimonial/>
				<Subscribe/>
				<ReusableNewsCards
					title={newsTitle}
					subtitle={newsSubtitle}
					chipText="News and Updates"
					alignItems="center"
					list={sortedBlogList}
				/>
				<ContactForm/>
			</StyledWrapper>
		</Page>
	)
}

export default Home