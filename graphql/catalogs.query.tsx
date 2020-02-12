import gql from 'graphql-tag';

export interface Catalogs {
    getCatalogsQueryFunction: VehicleViews[];
}

export interface VehicleViews {
    vehicle_view: VehicleView[];
}

export interface VehicleView {
    id: string;
    value: string;
    image: string;
}

const CATALOGS_QUERY = gql`
    query Catalogs {
        getCatalogsQueryFunction {
            vehicle_view{
                id
                value
                image
            }
        }
    }
`;

export default CATALOGS_QUERY;
