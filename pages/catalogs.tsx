import React from 'react';
import Head from 'next/head';
import {useQuery} from '@apollo/react-hooks';
import {getCatalogs} from '../graphql/vehicle-premium/query/getCatalogs';
import {CatalogsQuery, CatalogsQueryVariables} from '../generated/schema';

const CatalogsPage = () => {
    // Create a query hook
    const {data, loading, error} = useQuery<CatalogsQuery, CatalogsQueryVariables>(getCatalogs);

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
                {data?.getCatalogsQueryFunction && data?.getCatalogsQueryFunction.map(catalogs =>
                    catalogs && catalogs.vehicle_view && catalogs.vehicle_view.map(catalog =>
                        catalog && <li key={`id_${catalog.id}`}>{catalog.value}</li>
                    )
                )}
            </ul>
        </div>
    );
};

export default CatalogsPage;
