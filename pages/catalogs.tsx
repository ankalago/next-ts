import React from 'react';
import Head from 'next/head';
import {useQuery} from '@apollo/react-hooks';
import CATALOGS_QUERY, {Catalogs} from '../graphql/catalogs.query';

const CatalogsPage = () => {
    // Create a query hook
    const {data, loading, error} = useQuery<Catalogs, any>(CATALOGS_QUERY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {JSON.stringify(error)}</p>;
    }

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <ul>
                {data?.getCatalogsQueryFunction.map(catalogs =>
                    catalogs.vehicle_view.map(catalog =>
                        <li key={`id_${catalog.id}`}>{catalog.value}</li>
                    )
                )}
            </ul>
        </div>
    );
};

export default CatalogsPage;
