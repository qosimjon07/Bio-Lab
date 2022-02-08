import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import ConnectBox from "../../components/layout/connect";

function CatalogLensInjectorsPage() {
    const { id } = useParams();
	console.log(id)
    const [data, setData] = useState(null);

    useEffect(() => {
		axios
			.get(`http://localhost:3000/catalogLensInjectors/${id}`)
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

export default CatalogLensInjectorsPage;

function IdCard({ data }) {
	return (
		<div>
			<div className="container">
				<div className="grid w-full grid-cols-1 md:grid-cols-7 gap-3 py-10">
					<img className="md:col-span-3 w-full rounded-3xl overflow-hidden border border-gray-200" src={data.imgURL} alt={data.name} />
					<div className="w-full md:col-span-4 space-y-2">
						<p className="text-4xl font-semibold mb-6">{data.name}</p>
						<p className="text-xl">{data.name}</p>
						<p>{data.title}</p>
					</div>
				</div>
			</div>
			<ConnectBox />
		</div>
	);
}