import keys from "./AWS";

const config = {
	bucketName: "newgoingson",
	// dirName: "photos" /* optional */,
	region: "us-west-2",
	accessKeyId: process.env.S3_KEY,
	secretAccessKey: process.env.S3_SECRET
};

export default config;
