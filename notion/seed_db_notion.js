
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { HNSWLib } = require("langchain/vectorstores/hnswlib");
const { config } = require("dotenv")
const { notionToDocs } = require("./utils");

config({ path: '../.env' });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PAGE_ID = process.env.PAGE_ID;
const DATABASE_ID = process.env.DATABASE_ID;

const saveNotionToVectorStore = async () => {
  // Converts Notion Database/Page and all it's children into Langchain Documents
  const notionDocs = await notionToDocs('page', PAGE_ID);
  // const notionDocs = await notionToDocs('database', DATABASE_ID);

  const vectorStore = await HNSWLib.fromDocuments(
    notionDocs,
    new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY }),
  );

  await vectorStore.save("hnswlib");
  console.log("Notion Data successfully stored in Vector Store")
}

saveNotionToVectorStore();