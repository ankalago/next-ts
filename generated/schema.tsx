import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Aggregation = {
   __typename?: 'Aggregation',
  key: Scalars['String'],
  doc_count: Scalars['Int'],
};

export type Catalog = {
   __typename?: 'Catalog',
  id: Scalars['String'],
  value: Scalars['String'],
};

export type CatalogImage = {
   __typename?: 'CatalogImage',
  id: Scalars['String'],
  value: Scalars['String'],
  image: Scalars['String'],
};

export type CatalogInput = {
  id: Scalars['String'],
  value: Scalars['String'],
};

export type CatalogPayloadInput = {
  id: Scalars['String'],
  value: Scalars['String'],
  payload?: Maybe<Scalars['String']>,
};

export type Catalogs = {
   __typename?: 'Catalogs',
  sold_catalog?: Maybe<Array<Maybe<Catalog>>>,
  level_failure?: Maybe<Array<Maybe<Catalog>>>,
  vehicle_view?: Maybe<Array<Maybe<CatalogImage>>>,
  tabs?: Maybe<Array<Maybe<CatalogTab>>>,
  years?: Maybe<Array<Maybe<Catalog>>>,
};

export type CatalogTab = {
   __typename?: 'CatalogTab',
  id: Scalars['String'],
  value: Scalars['String'],
  count?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
};

export type Failure = {
   __typename?: 'Failure',
  type?: Maybe<Catalog>,
  pointX?: Maybe<Scalars['Int']>,
  pointY?: Maybe<Scalars['Int']>,
  image?: Maybe<Image>,
  imagePointSelect?: Maybe<Image>,
  description?: Maybe<Scalars['String']>,
  level?: Maybe<Catalog>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
};

export type FailureInput = {
  type?: Maybe<CatalogInput>,
  pointX?: Maybe<Scalars['Int']>,
  pointY?: Maybe<Scalars['Int']>,
  image?: Maybe<ImageInput>,
  imagePointSelect?: Maybe<ImageInput>,
  description?: Maybe<Scalars['String']>,
  level?: Maybe<CatalogInput>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
};

export type GeoPoint = {
   __typename?: 'GeoPoint',
  lat?: Maybe<Scalars['Float']>,
  lon?: Maybe<Scalars['Float']>,
};

export type GeoPointInput = {
  lat?: Maybe<Scalars['Float']>,
  lon?: Maybe<Scalars['Float']>,
};

export type HealthResponse = {
   __typename?: 'HealthResponse',
  uptime?: Maybe<Scalars['Float']>,
  cpuUsage?: Maybe<Scalars['Float']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['Float']>,
};

export type Image = {
   __typename?: 'Image',
  id?: Maybe<Scalars['String']>,
  mimetype?: Maybe<Scalars['String']>,
  originalKey?: Maybe<Scalars['String']>,
  thumbnailKey?: Maybe<Scalars['String']>,
  originalUrl?: Maybe<Scalars['String']>,
  thumbnailUrl?: Maybe<Scalars['String']>,
  bucket?: Maybe<Scalars['String']>,
  originalSize?: Maybe<Scalars['Float']>,
  fileName?: Maybe<Scalars['String']>,
};

export type ImageInput = {
  id?: Maybe<Scalars['String']>,
  mimetype?: Maybe<Scalars['String']>,
  originalKey?: Maybe<Scalars['String']>,
  thumbnailKey?: Maybe<Scalars['String']>,
  bucket?: Maybe<Scalars['String']>,
  originalSize?: Maybe<Scalars['Float']>,
  fileName?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type Location = {
   __typename?: 'Location',
  longName?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type LocationInput = {
  longName?: Maybe<Scalars['String']>,
  shortName?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  saveVehicleMutationFunction: Scalars['String'],
  updateVehicleMutationFunction: Scalars['String'],
};


export type MutationSaveVehicleMutationFunctionArgs = {
  vehicle?: Maybe<VehiclePremiumInput>
};


export type MutationUpdateVehicleMutationFunctionArgs = {
  id: Scalars['ID'],
  vehicle?: Maybe<VehiclePremiumInput>,
  isUpdatedVehicle?: Maybe<Scalars['Boolean']>
};

export type Query = {
   __typename?: 'Query',
  getVehiclesQueryFunction?: Maybe<Array<Maybe<VehiclePremium>>>,
  getCatalogsQueryFunction?: Maybe<Array<Maybe<Catalogs>>>,
  getCatalogsAggregationQueryFunction?: Maybe<Array<Maybe<Aggregation>>>,
  getVehicleByIdQueryFunction?: Maybe<VehiclePremium>,
  getHealthQueryFunction?: Maybe<HealthResponse>,
};


export type QueryGetVehiclesQueryFunctionArgs = {
  groupId?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  currentPage?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  genericQuery?: Maybe<Scalars['String']>
};


export type QueryGetCatalogsQueryFunctionArgs = {
  yearsBefore?: Maybe<Scalars['Int']>
};


export type QueryGetCatalogsAggregationQueryFunctionArgs = {
  groupId?: Maybe<Scalars['String']>,
  genericQuery?: Maybe<Scalars['String']>
};


export type QueryGetVehicleByIdQueryFunctionArgs = {
  id?: Maybe<Scalars['ID']>
};

export type Status = {
   __typename?: 'Status',
  statusId?: Maybe<Scalars['String']>,
  statusValue?: Maybe<Scalars['String']>,
  statusUpdatedAt?: Maybe<Scalars['String']>,
};

export type StatusInput = {
  statusId?: Maybe<Scalars['String']>,
  statusValue?: Maybe<Scalars['String']>,
  statusUpdatedAt?: Maybe<Scalars['Float']>,
};

export type VehiclePremium = {
   __typename?: 'VehiclePremium',
  id?: Maybe<Scalars['String']>,
  groupId?: Maybe<Scalars['String']>,
  brand?: Maybe<Catalog>,
  model?: Maybe<Catalog>,
  version?: Maybe<Catalog>,
  year?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  priceDisplay?: Maybe<Scalars['String']>,
  location?: Maybe<GeoPoint>,
  locationAddress?: Maybe<Scalars['String']>,
  vin?: Maybe<Scalars['String']>,
  youtube?: Maybe<Scalars['String']>,
  mileage?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Image>>>,
  failures?: Maybe<Array<Maybe<Failure>>>,
  statusId?: Maybe<Scalars['String']>,
  statusValue?: Maybe<Scalars['String']>,
  statusUpdatedAt?: Maybe<Scalars['Float']>,
  visitCounter?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Float']>,
  createdAtDate?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  statusLogs?: Maybe<Array<Maybe<Status>>>,
  soldBy?: Maybe<Catalog>,
  description?: Maybe<Scalars['String']>,
  locationState?: Maybe<Location>,
  locationCity?: Maybe<Location>,
  locationColony?: Maybe<Location>,
  locationPostalCode?: Maybe<Scalars['String']>,
};

export type VehiclePremiumInput = {
  groupId?: Maybe<Scalars['String']>,
  brand?: Maybe<CatalogInput>,
  model?: Maybe<CatalogInput>,
  version?: Maybe<CatalogPayloadInput>,
  year?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  priceDisplay?: Maybe<Scalars['String']>,
  location?: Maybe<GeoPointInput>,
  locationAddress?: Maybe<Scalars['String']>,
  vin?: Maybe<Scalars['String']>,
  youtube?: Maybe<Scalars['String']>,
  mileage?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<ImageInput>>>,
  failures?: Maybe<Array<Maybe<FailureInput>>>,
  statusId?: Maybe<Scalars['String']>,
  statusValue?: Maybe<Scalars['String']>,
  statusUpdatedAt?: Maybe<Scalars['Float']>,
  visitCounter?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Float']>,
  createdAtDate?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  statusLogs?: Maybe<Array<Maybe<StatusInput>>>,
  soldBy?: Maybe<CatalogInput>,
  description?: Maybe<Scalars['String']>,
  locationState?: Maybe<LocationInput>,
  locationCity?: Maybe<LocationInput>,
  locationColony?: Maybe<LocationInput>,
  locationPostalCode?: Maybe<Scalars['String']>,
};

export type CatalogsQueryVariables = {};


export type CatalogsQuery = (
  { __typename?: 'Query' }
  & { getCatalogsQueryFunction: Maybe<Array<Maybe<(
    { __typename?: 'Catalogs' }
    & { sold_catalog: Maybe<Array<Maybe<(
      { __typename?: 'Catalog' }
      & Pick<Catalog, 'id' | 'value'>
    )>>>, level_failure: Maybe<Array<Maybe<(
      { __typename?: 'Catalog' }
      & Pick<Catalog, 'id' | 'value'>
    )>>>, vehicle_view: Maybe<Array<Maybe<(
      { __typename?: 'CatalogImage' }
      & Pick<CatalogImage, 'id' | 'value' | 'image'>
    )>>>, tabs: Maybe<Array<Maybe<(
      { __typename?: 'CatalogTab' }
      & Pick<CatalogTab, 'id' | 'value' | 'count' | 'status'>
    )>>>, years: Maybe<Array<Maybe<(
      { __typename?: 'Catalog' }
      & Pick<Catalog, 'id' | 'value'>
    )>>> }
  )>>> }
);


export const CatalogsDocument = gql`
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
export type CatalogsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CatalogsQuery, CatalogsQueryVariables>, 'query'>;

    export const CatalogsComponent = (props: CatalogsComponentProps) => (
      <ApolloReactComponents.Query<CatalogsQuery, CatalogsQueryVariables> query={CatalogsDocument} {...props} />
    );
    
export type CatalogsProps<TChildProps = {}> = ApolloReactHoc.DataProps<CatalogsQuery, CatalogsQueryVariables> & TChildProps;
export function withCatalogs<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CatalogsQuery,
  CatalogsQueryVariables,
  CatalogsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CatalogsQuery, CatalogsQueryVariables, CatalogsProps<TChildProps>>(CatalogsDocument, {
      alias: 'catalogs',
      ...operationOptions
    });
};
export type CatalogsQueryResult = ApolloReactCommon.QueryResult<CatalogsQuery, CatalogsQueryVariables>;