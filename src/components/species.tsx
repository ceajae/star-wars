import { useQuery } from "react-query";
import { getSpecies } from "../utils/api";
import { FaLongArrowAltLeft } from 'react-icons/fa';

import Loader from "../common/loader";

type Specie = {
    name: string,
    language: string,
    classification: string,
    skin_colors: string,
}

type ResponseData = {
    results: Specie[],
}

const Species = (props: any) => {
    const { status, error, data } = useQuery<ResponseData, Error>('species', getSpecies);

    const goBack = () => {
        props.history.goBack();
    }

    const renderTableData = (speciesList: Specie[] | undefined) => {
        return speciesList && speciesList.map((specie, key) => {
            return (
                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{specie.name}</td>
                    <td>{specie.language}</td>
                    <td>{specie.classification}</td>
                    <td>{specie.skin_colors}</td>
                </tr>
             )
        })
    }

    if (status === "loading") {
        return <Loader />
    }

    if (status === "error") {
        return <div>{error!.message}</div>;
    }

    return (
        <div className="container">
            <section>
                <header className="header">
                    <span onClick={goBack}>
                        <FaLongArrowAltLeft />
                    </span>
                    <h1>Species</h1>
                </header>

                <div className="table_container">
                    <table className="table_wrap">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Language</th>
                                <th>Classification</th>
                                <th>Skin Colors</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(data && data.results)}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Species;