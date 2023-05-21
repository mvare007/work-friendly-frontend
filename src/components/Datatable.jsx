import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import axios from 'axios';

// https://primereact.org/datatable/

const Datatable = ({ url, style = { minWidth: '50rem' } }) => {
	const [data, setData] = useState([]);
	const baseUrl = import.meta.env.VITE_API_URL;
	useEffect(() => {
		debugger
		axios.get(`${baseUrl}/${url}`)
			.then(res => {
				console.debug(res.data);
				setData(res.data.users);
			})
			.catch(err => {
				console.error(err);
			})
	}, [url]);

	const columns = () => {
		if (data.length > 0) {
			return Object.keys(data[0]).map((key, i) => {
				return {
					field: key,
					header: key // TODO: Translations
				}
			})
		} else {
			return [];
		}
	}

	return(
		<DataTable value={data} tableStyle={style}>
			{columns().map((col, i) => (
				<Column key={i} field={col.field} header={col.header}></Column>
			))}
		</DataTable>
	)
}

export default Datatable;