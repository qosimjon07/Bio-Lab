import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import CatalogPage from "./pages/catalog";
import CatalogIntraocularPage from "./pages/intraocularDetail";
import HomePage from "./pages/home";
import CatalogLensInjectorsPage from "./pages/InjectorsDetail";
import ViscoelasticGelsPage from "./pages/ViscoelasticDetail";
import CatalogSuturesPage from "./pages/suturesDetail";
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blogDetail";
import ContactPage from "./pages/contact";
import LoginPage from "./pages/login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/blog/:id" element={<BlogDetailPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/catalog/Intraocular/:id" element={<CatalogIntraocularPage />} />
				<Route path="/catalog/LensInjectors/:id" element={<CatalogLensInjectorsPage />} />
				<Route path="/catalog/Viscoelastic/:id" element={<ViscoelasticGelsPage />} />
				<Route path="/catalog/Sutures/:id" element={<CatalogSuturesPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
