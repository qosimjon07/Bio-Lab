import Layout from "../../components/layout";
import ConnectBox from "../../components/layout/connect";

function ContactPage() {
	return (
		<Layout>
			<div className="py-10">
				<div className="container">
					<div className="w-16 border-b-2 border-orange-500"></div>
					<p className="text-4xl font-medium mb-5">Contacts</p>
					<div>
						<iframe
							className="w-full h-56 md:h-72 lg:h-80 xl:h-96"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5992.25980051092!2d69.33036438183211!3d41.327788593525604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5724f2d3765%3A0xef1149e30ef8de56!2sAnorbank!5e0!3m2!1sru!2s!4v1644233434148!5m2!1sru!2s"
							allowFullScreen=""
							title="iframe-has-title"
							loading="lazy" />
					</div>
				</div>
			</div>
			<ConnectBox />
		</Layout>
	);
}

export default ContactPage;
