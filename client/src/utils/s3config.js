import keys from "./keys";

const config = {
	bucketName: "newgoingson",
	// dirName: "photos" /* optional */,
	region: "us-west-2",
	accessKeyId: keys.s3key,
	secretAccessKey: keys.s3secret
};

export default config;
