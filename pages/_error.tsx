import * as React from 'react'
import {NextPage} from 'next'

const Error: NextPage<{ statusCode: any }> = ({statusCode}) => {
    return (
        <div>
            <p>Custom Error Page</p>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        </div>
    )
}

Error.getInitialProps = async ({req, err}) => {
    const statusCode = !!req?.statusCode ? req.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error