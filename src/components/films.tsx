import { useQuery } from "react-query";
import { getFilms } from "../utils/api";
import { FaLongArrowAltLeft } from 'react-icons/fa';

import Loader from "../common/loader";

type Film = {
    title: string,
    director: string,
    producer: string,
}

type ResponseData = {
    results: Film[],
}

const Films = (props: any) => {
    const { status, error, data } = useQuery<ResponseData, Error>('films', getFilms);

    const goBack = () => {
        props.history.goBack();
    }

    const renderTableData = (filmsList: Film[] | undefined) => {
        return filmsList && filmsList.map((film, key) => {
            return (
                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{film.title}</td>
                    <td>{film.director}</td>
                    <td>{film.producer}</td>
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
                    <h1>Films</h1>
                </header>

                <div className="table_container">
                    <table className="table_wrap">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Title</th>
                                <th>Director</th>
                                <th>Producer</th>
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

export default Films;