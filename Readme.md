# Serverless API Test

Before start, **Clone** this Repo to your own Github Profile.

## Technical stack:
* Node.js
* Serverless Framework
* MongoDB
* AWS (Lambda, API Gateway)

## Setup

### Run Project:
To start project with *API*, *MongoDB* and *MongoDB Admin* services, just run:
```sh
docker-compose up
```

### Test Endpoint
**GET**  to `localhost:5050/dev/hello` should return `Hello World!`

### Ports:
* `localhost:5050` - API
* `localhost:5051` - MongoDB
* [localhost:5052](http://localhost:5052/) - MongoDB Admin

### MongoDB Admin
* Navigate to: [localhost:5052](http://localhost:5052/)
* Connection Name: `Any`
* Connection String: `mongodb://user:password@mongo:27017`
* Press **Add Connection**
* Click **Connect** in right Action Tab, to enter.

---

## Tasks
1. Add endpoint, to **CREATE** document or documents to MongoDB:  
**POST** to `localhost:5050/dev/documents` array of documents

2. Add endpoint, to **READ** document or documents from MongoDB:  
**GET** to `localhost:5050/dev/documents/:id` get array of documents or single document (by id)

3. Add endpoint, to **UPDATE** document in MongoDB:  
**PUT** to `localhost:5050/dev/documents/:id` with document update

4. Add endpoint, to **DELETE** document or documents from MongoDB:  
**DELETE** to `localhost:5050/dev/documents/:id` without id, to delete all documents, or delete document by id.

5. Deploy API using Serverless Framework to your AWS Account. You can use Mongo Atlas for test Database.

P.S. Will be nice, if you add some Jest Unit Tests.
