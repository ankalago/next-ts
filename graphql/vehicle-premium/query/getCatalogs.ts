import {gql} from "apollo-boost";

export const getCatalogs = gql`
    query Catalogs {
        getCatalogsQueryFunction {
            sold_catalog {
                id
                value
            }
            level_failure {
                id
                value
            }
            vehicle_view {
                id
                value
                image
            }
            tabs {
                id
                value
                count
                status
            }
            years {
                id
                value
            }
        }
    }
`;