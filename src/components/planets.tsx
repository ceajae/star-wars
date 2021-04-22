import { useQuery } from "react-query";
import { getPlanets } from "../utils/api";

import Loader from "../common/loader";

type Planet = {
    name: string,
    climate: string,
    terrain: string,
    population: string,
}

type ResponseData = {
    results: Planet[],
}

const Planets = (props: any) => {
    const { status, error, data } = useQuery<ResponseData, Error>('planets', getPlanets);

    const goBack = () => {
        props.history.goBack();
    }

    const renderTableData = (planetsList: Planet[] | undefined) => {
        return planetsList && planetsList.map((planet, key) => {
            return (
                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{planet.name}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.population}</td>
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
                        <i className='fas fa-long-arrow-alt-left'></i>
                    </span>
                    <h1>Planets</h1>
                </header>

                <div className="table_container">
                    <table className="table_wrap">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Terrain</th>
                                <th>Climate</th>
                                <th>Population</th>
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

export default Planets;