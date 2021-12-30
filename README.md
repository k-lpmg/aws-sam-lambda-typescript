# aws-sam-lambda-typescript

- This is an example of configuring AWS Lambda based on typescript.
- The purpose of this repository is building with [aws-sam-webpack-plugin](https://github.com/graphboss/aws-sam-webpack-plugin) and deploying aws lambda with GitHub Action using sam.

## Build

```bash
npm run build
```

## Local Test

```bash
sam local start-api
```

```bash
curl http://127.0.0.1:3000/hello
```

## Deploy

- Set actions secrets

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
S3_BUCKET
```

## Reference

- [aws-sam-webpack-plugin](https://github.com/graphboss/aws-sam-webpack-plugin)

- [aws-sam-github-actions-example](https://github.com/aws-samples/aws-sam-github-actions-example)
