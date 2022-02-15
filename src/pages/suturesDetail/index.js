import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import ConnectBox from "../../components/layout/connect";

function CatalogSuturesPage() {
    const { id } = useParams();
	console.log(id)
    const [data, setData] = useState(null);

    useEffect(() => {
		axios
			.get(`http://localhost:3000/catalogSutures/${id}`)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

    return(
        <Layout>
            <div className="">{data && <IdCard data={data} />}</div>
        </Layout>
    )
}

export default CatalogSuturesPage;

function IdCard({ data }) {
	return (
		<div>
			<div className="container mb-120">
				<div className="grid w-full grid-cols-1 md:grid-cols-5 detail-card-box">
					<img className="md:col-span-2 detail-card-img" src={data.imgURL} alt={data.name} />
					<div className="w-full md:col-span-3">
						<p className="detail-card-name">{data.name}</p>
						<p className="detail-card-title">{data.name}</p>
						<p className="detail-card-text">{data.title}</p>
					</div>
				</div>
			</div>
			<ConnectBox />
		</div>
	);
}