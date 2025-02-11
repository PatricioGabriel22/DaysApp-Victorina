import {S3Client} from '@aws-sdk/client-s3'
import {fromEnv} from '@aws-sdk/credential-providers'
import {AWS_REGION} from './envStuff.js'

const s3Params = {
    region: AWS_REGION,
    credentials:fromEnv()
}

export const s3 = new S3Client(s3Params)