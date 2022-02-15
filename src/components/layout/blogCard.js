import { Link } from "react-router-dom";
import BlogImg from "../../images/blogImg.png";

function BlogCard({question}) {
	return (
		<Link to={`/blog/${question.id}`}>
			<div className="w-full">
				<img className="blog-Img" src={BlogImg} width="100%" alt={question.name} />
				<div className="icons-div">
					<div className="flex space-x-1 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<p>{question.date}</p>
					</div>
					<div className="flex space-x-1 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
						<p>{question.views}</p>
					</div>
				</div>
				<p className="line-clamp-2 blog-text">{question.title}</p>
			</div>
		</Link>
	);
}

export default BlogCard;
