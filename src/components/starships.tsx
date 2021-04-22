import { useQuery } from "react-query";
import { getStarships } from "../utils/api";
import { FaLongArrowAltLeft } from 'react-icons/fa';

import Loader from "../common/loader";

type Starship = {
    name: string,
    model: string,
    starship_class: string,
    manufacturer: string
}

type ResponseData = {
    results: Starship[],
}

const Starships = (props: any) => {
    const { status, error, data } = useQuery<ResponseData, Error>('starships', getStarships);

    const goBack = () => {
        props.history.goBack();
    }

    const renderTableData = (starshipsList: Starship[] | undefined) => {
        return starshipsList && starshipsList.map((starship, key) => {
            return (
                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{starship.name}</td>
                    <td>{starship.model}</td>
                    <td>{starship.starship_class}</td>
                    <td>{starship.manufacturer}</td>
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
                    <h1>Starships</h1>
                </header>

                <div className="table_container">
                    <table className="table_wrap">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Class</th>
                                <th>Manufacturer</th>
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

export default Starships;