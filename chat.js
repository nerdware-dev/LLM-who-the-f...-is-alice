const { OpenAI } = require("langchain/llms/openai");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { HNSWLib } = require("langchain/vectorstores/hnswlib");
const { RetrievalQAChain, loadQARefineChain } = require("langchain/chains");
const { config } = require("dotenv");

config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 });

const question = "Who the f... is Alice?";

async function getAnswer(question) {

  // STEP 1: Load the vector store
  const vectorStore = await HNSWLib.load(
    "hnswlib",
    new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY }),
  );

  // STEP 2: Create the chain
  const chain = new RetrievalQAChain({
    combineDocumentsChain: loadQARefineChain(model),
    retriever: vectorStore.asRetriever(),
  });

  // STEP 3: Get the answer
  const result = await chain.call({
    query: question,
  });

  return result.output_text;
}

getAnswer(question).then(answer => console.log(answer));
